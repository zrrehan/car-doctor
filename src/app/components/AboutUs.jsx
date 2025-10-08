import Image from "next/image"
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
function AboutUs() {
    return(
        <div>
            <div className="lg:flex items-center justify-between ">
                <div className="lg:w-[521px] flex items-center">
                    <div className="h-fit">
                        <Image className="rounded-lg relative top-20" src={person} height={573} width={460} alt="person image"></Image>
                        <div className="bg-white rounded-lg w-fit p-2 relative bottom-10 left-10 lg:left-45">
                            <Image src={parts} height={332} width={327} alt="Parts image"></Image>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[476px] space-y-3">
                    <h1 className="text-[#FF3811] font-bold">About Us</h1>
                    <h1 className="font-bold text-5xl">We are Qualified & of experience in this field</h1>
                    <p className="font-[16px] text-[#737373]">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="font-[16px] text-[#737373]">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="px-[30px] text-[18px] rounded-lg py-[15px] btn bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    )
}
export default AboutUs