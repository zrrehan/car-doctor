import dbConnect from "@/app/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function DELETE(request, {params}) {
    const id = await params;
    const deletedResponse = await dbConnect("checkout").deleteOne({_id: new ObjectId(id)});
    return Response.json(deletedResponse);
}