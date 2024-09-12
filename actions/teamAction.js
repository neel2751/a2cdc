"use server";
import pool from "@/db/dbconfig";
import fs from "fs";
import path from "path";

export async function getTeamData() {
  try {
    const query = "SELECT * FROM teams where isDelete = 0 AND status = 1";
    const [result] = await pool.query(query);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getAdminTeamData() {
  try {
    const query = "SELECT * FROM teams where isDelete = 0";
    const [result] = await pool.query(query);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTeamStatus(item) {
  try {
    // if status true then make false or false make true
    const query = "UPDATE teams SET status = ? WHERE id = ?";
    const [result] = await pool.query(query, [!item.status, item.id]);
    if (result.affectedRows === 1)
      return { status: 200, message: "Team Status Updated" };
    return { status: 500, message: "Status Not Update!" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Error Update Status" };
  }
}

export async function deleteTeamData(item) {
  try {
    const query = "UPDATE teams SET isDelete = 1 WHERE id = ? ";
    const [result] = await pool.query(query, item.id);
    if (result.affectedRows === 1)
      return { status: 200, message: "Team Data is Deleted" };
    return { status: 500, message: "Team Data Not Deleted" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Something went wrong" };
  }
}

async function imageUploadLocal(image, firstName) {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const fileName = `${firstName}.${image.name.split(".")[1]}`;
    const uploadDir = path.join(process.cwd(), "public/images/team");
    fs.mkdirSync(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);
    // in filePath we have to store only after public
    const filePathAfterPublic = filePath.replace(process.cwd(), "");
    const imagePath = filePathAfterPublic.split("/").slice(2).join("/");
    return imagePath;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateTeam(data, oldData) {
  const { fName, lName, designation, department, bio } = data;
  const date = new Date().toISOString().split("T")[0];
  const image = data.image.get("image");

  let imagePath = oldData.image;
  let removeOldImage = false;

  // If a new image is uploaded, process the new image
  if (image.name) {
    imagePath = await imageUploadLocal(image, data.fName);

    // Check if the new image path is different from the old one
    if (imagePath && imagePath !== oldData.image) {
      removeOldImage = true; // Flag to remove the old image
    }
  }

  // Prepare the SQL query
  const query = `
    UPDATE teams SET 
      firstName = ?, 
      lastName = ?, 
      image = ?, 
      designation = ?, 
      department = ?, 
      bio = ?, 
      update_at = ? 
    WHERE id = ?
  `;
  const [result] = await pool.query(query, [
    fName,
    lName,
    imagePath, // Update with either the old image or the new one
    designation,
    department,
    bio,
    date,
    oldData.id,
  ]);

  // If a new image was uploaded and it's different, remove the old one
  if (removeOldImage) {
    fs.unlinkSync(path.join(process.cwd(), "public/", oldData.image));
  }

  // Return success or failure message
  if (result.affectedRows === 1) {
    return { status: 200, message: "Team updated successfully" };
  } else {
    return { status: 500, message: "Failed to update the team" };
  }
}

export async function addTeam(data) {
  const {
    fName: firstName,
    lName: lastName,
    designation,
    department,
    bio,
  } = data;
  const image = data.image.get("image");
  // we have to store image in local public directory in under images/team/firstname.type
  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = `${firstName}.${image.name.split(".")[1]}`;
  const uploadDir = path.join(process.cwd(), "public/images/team");
  fs.mkdirSync(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, buffer);
  // in filePath we have to store only after public
  const filePathAfterPublic = filePath.replace(process.cwd(), "");
  const imagePath = filePathAfterPublic.split("/").slice(2).join("/");
  const date = new Date().toISOString().split("T")[0];
  try {
    const query =
      "INSERT INTO teams (firstName, lastName,designation,department,image,bio,created_at,update_at) VALUES (?,?,?,?,?,?,?,?)";
    const [result] = await pool.query(query, [
      firstName,
      lastName,
      designation,
      department,
      imagePath,
      bio,
      date,
      date,
    ]);
    if (result.affectedRows === 1) {
      return { message: "Team added successfully", status: 200 };
    }
  } catch (error) {
    console.error(error);
    return { message: "Failed to add team", status: 500 };
  }
}
