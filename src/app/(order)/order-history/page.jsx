"use client";
import { Suspense } from "react";
import TopImg from "../components/TopImg";
import AllOrderHistory from "./component/AllOrderHistory";
import useUserInfo from "@/customHooks/useUserInfo";
import Loading from "@/app/loading";

function OrderHistory() {
    const {email} = useUserInfo();
    const dataPromise = fetch(`${process.env.NEXT_PUBLIC_hostAddress}api/checkout?email=${email}`)
        .then(res => res.json());
    return(
        <div>
            <TopImg title = "Order History"></TopImg>
            <Suspense fallback={<Loading></Loading>}>
                <AllOrderHistory dataPromise={dataPromise}></AllOrderHistory>
            </Suspense>
        </div>
    )
}

export default OrderHistory;