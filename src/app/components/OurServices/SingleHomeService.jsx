import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";

function SingleHomeService({ data }) {
    const {img, price, title} = data;
    return(
        <div className="h-[348px] w-[364px] px-[25px] gap-3 col-span-4 flex flex-col">
            <Image className="rounded-2xl bg-cover h-[208px]" src = {img} width={314} height={208} alt = "Service Image"></Image>
            <div>
                <h1 className="font-bold text-2xl text-[#444444]">{title}</h1>
                <div className="font-semibold text-xl text-[#FF3811] flex items-center justify-between">
                    <p>Price: ${price}</p>
                    <IoMdArrowRoundForward size = {27}/>
                </div>
            </div>
        </div>
    )
}

export default SingleHomeService;