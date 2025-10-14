const { default: dbConnect } = require("@/app/lib/dbconnect");
import bcrypt from "bcrypt";

export async function LoginUserViaEmail(userData) {
    const {email, password} = userData;
    const collection = dbConnect("users");
    const user = await collection.findOne({email});
    
    console.log(user, "checking user")

    if(!user) {
        return null;
    }

    const passwordMatched = bcrypt.compare(user.password, password);
    console.log(passwordMatched);
    if(passwordMatched) {
        return user;
    } 
    return null;
}