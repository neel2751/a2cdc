"use server";
import pool from "@/db/dbconfig";
import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
// import pool from "@/db/dbconfig";

export async function contactUs(data) {
  try {
    // check the data is empty or not
    if (Object.keys(data).length === 0) {
      return { status: 400, message: "Please fill all the fields" };
    }
    const connection = await pool.getConnection();
    const date = new Date().toISOString().split("T")[0];
    const newData = { ...data, created_at: date };
    const query = "INSERT INTO contact SET ?";
    const [result] = await connection.query(query, newData);
    connection.release();
    if (result.affectedRows === 1) {
      const sendmail = await sendMailHandler(data.email);
      console.log(sendmail);
      return { status: 200, message: "Our Team Contact Shortly 🤞" };
    }
    return { status: 500, message: "Failed to contact us" };
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: "Failed to contact us" };
  }
}

export async function getAllContactData(date, page, limit) {
  try {
    // we get the data new date first
    // const date = new Date().toISOString().split("T")[0];
    const query = "SELECT * FROM contact WHERE created_at = ? LIMIT ? OFFSET ?";
    const [result] = await pool.query(query, [date, limit, (page - 1) * limit]);
    return result;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: "Failed to get contact data" };
  }
}

async function sendMailHandler(email) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: `Neel Patel ✌️  ${process.env.SMTP_USERNAME}`,
      to: email,
      subject: "Contact Us",
      text: "Hello, this is a contact us email",
      html: "<b>Hello, this is a contact us email</b>",
    };
    await transporter.sendMail(mailOptions);
    return { status: 200, message: "Email sent successfully" };
  } catch (error) {
    console.log(error.message);
  }
}

export async function callBackContact(data) {
  try {
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getNavLink(page, limit, search, active) {
  const validatedLimit = limit > 0 ? parseInt(limit) : 5;
  const validatedPage = page > 0 ? parseInt(page) : 1;
  const searchPattern = `%${search}%`; // For the LIKE query
  try {
    const countQuery = `SELECT COUNT(id) as total FROM navlink WHERE isDelete = 1 AND navName LIKE ? ${
      active !== "" ? "AND isActive = ?" : ""
    }`;

    const fetchQuery = `SELECT * FROM navlink WHERE isDelete = 1 AND navName LIKE ? ${
      active !== "" ? "AND isActive = ?" : ""
    } LIMIT ? OFFSET ?`;

    // Conditionally include `active` in the params
    const params =
      active !== ""
        ? [
            searchPattern,
            active,
            validatedLimit,
            (validatedPage - 1) * validatedLimit,
          ]
        : [searchPattern, validatedLimit, (validatedPage - 1) * validatedLimit];

    // Run the queries
    const [countResult] = await pool.query(
      countQuery,
      active !== "" ? [searchPattern, active] : [searchPattern]
    );
    const [result] = await pool.query(fetchQuery, params);
    // get the total link count
    return { result: result, totalItems: countResult[0].total };
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: "Failed to Fetch Nav Link" };
  }
}

export async function editNavLink(initialValue) {
  try {
    // we have to check duplicate navLink in another record not the same id and update as well
    const query =
      "SELECT * FROM navlink WHERE  navLink = ? AND isDelete = 1 AND id != ?";
    const [result] = await pool.query(query, [
      initialValue.navName,
      initialValue.id,
    ]);
    if (result.length > 0) {
      return { error: "Duplicate navLink" };
    } else {
      const query = "UPDATE navlink SET navLink = ?, navName = ? WHERE id =?";
      const [result] = await pool.query(query, [
        initialValue.navName,
        initialValue.navName,
        initialValue.id,
      ]);
      if (result.affectedRows === 1) {
        // revalidatePath("/");
        return { status: 200, message: "Nav link updated successfully" };
      }

      return { error: "Failed to update Nav Link" };
    }
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: "Failed to edit nav link" };
  }
}

export async function addNavLink(data) {
  try {
    const newData = {
      ...data,
      navLink: data.navName,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const query = "SELECT * FROM navlink WHERE  navLink = ? AND isDelete = 1";
    const [result] = await pool.query(query, [data.navName]);
    if (result.length > 0) {
      return { error: "Duplicate navLink" };
    } else {
      const query = "INSERT INTO navlink SET ?";
      const [result] = await pool.query(query, newData);
      if (result.affectedRows === 1) {
        revalidatePath("/", "layout");
        return { status: 200, message: "Nav link added successfully" };
        //
      }
      return { error: "Failed to add nav link" };
    }
  } catch (error) {
    console.log(error.message, "addNavlink error from action");
    return { status: 500, message: "Failed to add nav link" };
  }
}

// async function main() {
//   try {
//     const connection = await pool.getConnection();
//     const [rows, fields] = await connection.query("SELECT * FROM contact");
//     console.log(rows);
//     console.log(fields);
//     pool.releaseConnection(connection);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main(); // call the main function
