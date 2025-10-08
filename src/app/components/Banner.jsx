import bannerImg from "../../../assets/banner.jpg"
function Banner() {
    return (
        <div
            className="w-full h-[600px] rounded-xl "
            style={{
                backgroundImage: `url(${bannerImg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-linear-to-l rounded-xl from-[rgba(0,0,0,.5)] to-[rgba(1,1,1,1)] flex items-center h-full">
                <div className="w-[460px] text-white mx-[10px] lg:ml-[100px] space-y-[30px]">
                    <h1 className="text-5xl lg:text-6xl font-bold">Affordable Price for Car Servicing</h1>
                    <p>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>

                    <div className="lg:space-x-6 space-y-5 lg:space-y-0">
                        <button className="px-[30px] text-[18px] rounded-lg py-[15px] btn bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">Discover More</button>
                        <button className="px-[30px] text-[18px] rounded-lg py-[15px] btn btn-outline font-semibold ">Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
