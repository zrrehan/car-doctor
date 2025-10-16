import dbConnect from "@/app/lib/dbconnect"
import { ObjectId } from "mongodb";

export async function GET(request) { 
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("email");
    console.log("query:", query)
    
    let dbQuery = {}
    if(query != "" && query != null) {
        dbQuery = {email: query}
    }
    console.log(dbQuery)
   
    const result = await dbConnect("checkout").find(dbQuery).toArray();
    return Response.json(result)
 }

export async function POST(request, {params}) {
    const body = await request.json();

    const dbQuery = { _id: new ObjectId(body.productId)}
    const serviceData = await dbConnect("services").findOne(dbQuery);
    body.serviceImg = serviceData.img
    body.price = serviceData.price
    body.status = "pending"
    body.title = serviceData.title;
    
    const collection = dbConnect("checkout")
    const result = await collection.insertOne(body);
    return Response.json(result)
}