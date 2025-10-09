import dbConnect from "@/app/lib/dbconnect"
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const { id } = await params
    const result = await dbConnect("services").findOne({_id: new ObjectId(id)});
    return Response.json(result) 
} 