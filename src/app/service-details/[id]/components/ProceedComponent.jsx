import Link from "next/link";

function ProceedComponent({price, id}) {
    console.log(id)
    // price = "200"
    return(
        <div className="space-y-3 mt-5">
            <h1 className="font-bold text-4xl">Price ${price}</h1>
            <Link href = {`/checkout/${id}`}
                className="w-full text-[18px] rounded-lg py-[15px] btn bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">
                Proceed Checkout
            </Link>
        </div>  
    )
}

export default ProceedComponent;