import dbConnect from "@/app/lib/dbconnect";
import CheckoutForm from "./component/CheckoutForm";
import CheckOutTopImg from "./component/CheckOutTopImg";
import { ObjectId } from "mongodb";
import Lottie from "lottie-react";
import emptyBox from "../../../../assets/lotties/emptyBox.json"

async function Checkout({params}) {
    const {id} = await params;
    let serviceNotAvailable = true; 
    try {
        const checkout = await dbConnect("services").findOne({ _id: new ObjectId(id) });
        if (checkout) {
            serviceNotAvailable = false
        }
    } catch {
        
    }
    return(
        <div>
            <CheckOutTopImg></CheckOutTopImg>
            <CheckoutForm id={id} noService={serviceNotAvailable}></CheckoutForm>
        </div>
    )
}

export default Checkout;