import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

async function ServiceNav({ currentId }) {
    const response = await fetch(`${process.env.hostAddress}/api/services/`);
    let data = await response.json();
    data = data.slice(0, 10).filter(singleData => singleData._id !== currentId);
    return(
        <div className="bg-[#F3F3F3] px-10 py-5 rounded-2xl mt-10">
            <h1 className="text-2xl font-bold">Our Services</h1>
            <div className="flex flex-col items-center space-y-3 mt-2">
                {
                    data.map(singleData => {
                        return <Link href={`/service-details/${singleData._id}`} className="flex rounded-xl btn border-0 items-center justify-between w-[100%] px-4 h-[56px] bg-white hover:text-white hover:bg-[#FF3811]">
                            <h1>{singleData.title.slice(0,17)}</h1>
                                <IoMdArrowRoundForward size={27} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default ServiceNav;