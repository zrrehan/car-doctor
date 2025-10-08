import bgImage from "../../../../../assets/images/checkout/checkout.png"
function TopImage() {
    return(
        <div
            className="w-[full] h-[300px]"
            style={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}  
        >
            <div className="w-full h-full flex items-center pl-[50px]  lg:pl-[100px] bg-linear-to-l rounded-xl from-[rgba(0,0,0,0)] to-[rgba(1,1,1,1)] ">
                <h1 className="text-white text-5xl font-bold">Service Details</h1>
            </div>

        </div>
    )
}

export default TopImage;