function ProceedComponent({price}) {
    return(
        <div className="space-y-3 mt-5">
            <h1 className="font-bold text-4xl">Price ${price}</h1>
            <button
                className="w-full text-[18px] rounded-lg py-[15px] btn bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">
                Proceed Checkout
            </button>
        </div>  
    )
}

export default ProceedComponent;