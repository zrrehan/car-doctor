import { use } from "react";
import SingleOrderHistoryCard from "./SingleOrderHistoryCard";

function AllOrderHistory({ dataPromise }) {
    const data = use(dataPromise);
    return(
        <div>
            {
                data.map(singleData => <SingleOrderHistoryCard data={singleData}></SingleOrderHistoryCard>)
            }
        </div>
    )
}

export default AllOrderHistory;