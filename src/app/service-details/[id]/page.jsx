import Image from "next/image";
import TopImage from "./components/TopImage";
import ProceedComponent from "./components/ProceedComponent";
import ServiceNav from "./components/ServiceNav";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/lotties/loading.json"
export default async function ServiceDetails({params}) {
    const id = params?.id 
    const response = await fetch(`${process.env.hostAddress}api/services/${id}`)
    const data = await response.json();
    const { img, price, description,  facility, title} = data;
    return(
        <div className="space-y-10">
            <TopImage />
            <div className="grid grid-cols-4">
                <div className="col-span-4 xl:col-span-3 space-y-3 lg:mx-auto xl:mx-0">
                    <Image className="rounded-2xl " src = {img} height={400} width={752} alt="service image"></Image>
                    <h1 className="font-bold text-4xl">{title}</h1>
                    <p className="text-[16px] text-[#737373] lg:w-[756px]">{description}</p>
                    <div className="xl:hidden">
                        <ProceedComponent price={price} id={id}></ProceedComponent>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10">
                        {
                            facility.map((singelFacility, index) => {
                                return <div key={index} className="group space-y-2 p-[40px] lg:w-[364px] h-[204px] border-t-2  bg-[#F3F3F3]  border-[#FF3811] hover:shadow-md hover:shadow-[rgba(255,56,17,1)]   hover:bg-[rgba(255,56,17,0.9)]  rounded-2xl transition-colors duration-300">
                                    <h1 className="font-bold text-xl group-hover:text-white transition-colors duration-300">{singelFacility.name}</h1>
                                    <p className="text-[16px] text-[#737373] group-hover:text-white transition-colors duration-300">{singelFacility.details}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="hidden xl:flex flex-col">
                    <ProceedComponent price={price} id={id}></ProceedComponent>
                    <ServiceNav currentId = {id}></ServiceNav>
                </div>
            </div>
        </div>
    )
}