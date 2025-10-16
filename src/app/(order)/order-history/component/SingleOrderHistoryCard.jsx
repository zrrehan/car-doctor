"use client";
import { RxCross1 } from "react-icons/rx";

function SingleOrderHistoryCard({data}) {
    return(
        <div>
            <button className="btn btn-circle bg-[#444444] text-white" >
                <RxCross1 />
            </button>
        </div>
    )
}

export default SingleOrderHistoryCard;