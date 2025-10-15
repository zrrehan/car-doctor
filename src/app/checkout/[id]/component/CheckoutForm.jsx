"use client";

import useUserInfo from "@/customHooks/useUserInfo";
import { useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import emptyBox from "../../../../../assets/lotties/emptyBox.json"

function CheckoutForm({ id, noService }) {
    const user = useUserInfo();
    const [loading, setLoading] = useState(false);

    if(noService) {
        return(
            <div className="mt-32">
                <h1 className="text-center text-5xl font-bold">Not a valid Checkout</h1>
                <Lottie className="h-[500px]" animationData={emptyBox} loop={true}></Lottie>
            </div>
        )
    }
    function formSubmitHandler(event) {
        event.preventDefault();
        setLoading(true);
        const [date, phone, message] = [event.target.date.value, event.target.phone.value, event.target.message.value]
        
        if(!date || !phone) {
            Swal.fire({
                title: "Fillup Date and Phone please",
                icon: "error",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            return 
        }

        const checkoutData = {
            name: user.name, 
            email: user.email, 
            date: date, 
            phone: phone, 
            message: message, 
            productId: id, 
        }
        fetch(`${process.env.NEXT_PUBLIC_hostAddress}api/checkout`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(checkoutData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Order Confirmed",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                setLoading(false)
                event.target.reset();
            })
    }
    return(
        <form onSubmit={formSubmitHandler} className="space-y-7 bg-base-300 p-24 rounded-xl mt-32 text-[18px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="input w-full" value={user.name} disabled />
                <input type="date" name = "date" placeholder="" className="input w-full" />
                <input type="text" placeholder="Your Email" className="input w-full" value={user.email} disabled />
                <input type="text" name = "phone" placeholder="Your Phone" className="input w-full" />
            </div>
            <textarea name = "message" className="textarea w-full h-[200px]" placeholder="Your Message"></textarea>
            <button disabled ={loading} className="rounded-lg w-full btn bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">
                {
                    loading ? <p className="flex gap-4">
                        <span class="loading loading-spinner loading-sm"></span>
                        <span>In process</span>
                    </p> : <p>Order Confirm</p>
                }
            </button>
        </form>
    )
}

export default CheckoutForm;