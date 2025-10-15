import dbConnect from "@/app/lib/dbconnect"

export async function GET() {
    const result = await dbConnect("checkout").find().toArray();
    return Response.json(result) 
}

export async function POST(request, {params}) {
    const id = await params;
    const body = await request.json();
    const collection = dbConnect("checkout")
    const result = await collection.insertOne(body);
    return Response.json(result)
}