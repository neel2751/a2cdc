"use server";

import pool from "@/db/dbconfig";
import { createSession } from "@/app/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function Register(email, password) {
  try {
    const EmailExist = await EmailExists(email);
    if (EmailExist) {
      return { error: "Email already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = "INSERT INTO admin (email, password) VALUES (?, ?)";
    const [result] = await pool.query(query, [email, hashedPassword]);
    if (result.affectedRows === 1) {
      return { message: "User created successfully" };
    }
  } catch (error) {
    console.log("Error come from Register", error);
  }
}

export async function Login(email, password) {
  try {
    const query = "SELECT * FROM admin WHERE email = ?";
    const [result] = await pool.query(query, [email]);
    if (result.length < 1) {
      return { error: "Email not found" };
    }
    const isValidPassword = bcrypt.compareSync(password, result[0].password);
    if (!isValidPassword) {
      return { error: "Invalid password" };
    }
    // return;
    await createSession(result[0].id);
    redirect("/DashBoard");
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function EmailExists(email) {
  try {
    const query = "SELECT email FROM admin WHERE email = ?";
    const [result] = await pool.query(query, [email]);
    return result.length > 0;
  } catch (error) {
    console.log("this error form this Email Exists", error.message);
  }
}
