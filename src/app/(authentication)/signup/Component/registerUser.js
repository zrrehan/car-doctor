"use server";

import dbConnect from "@/app/lib/dbconnect";
import bcrypt from "bcrypt";

export async function registerUser(userData) {
    const userExistCheckResult = await dbConnect("users").findOne({email: userData.email})
    if (userExistCheckResult) {
        return { message: "Email Already In Use", status: "error" } 
    }
    const hash =  await bcrypt.hash(userData.password, 10)
    userData.password = hash;
    const result = await dbConnect("users").insertOne(userData);
    return { message: "You Are Successfully Registered", status: "success" }
}