import dbConnect from "@/app/lib/dbconnect"

export async function GET() {
    const result = await dbConnect("services").find().toArray();
    return Response.json(result) 
} 