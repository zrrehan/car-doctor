import SingleHomeService from "./SingleHomeService";

async function OurService() {
    const res = await fetch(`${process.env.hostAddress}/api/services`);
    let data = await res.json();
    data  = data.slice(0, 6)
    return(
        <div className="space-y-3">
            <h1 className="text-[#FF3811] text-center text-xl font-bold">Services</h1>
            <h1 className="font-bold text-5xl text-center">Our Service Area</h1>
            <p className="text-[#737373] max-w-[717px] mx-auto text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="grid grid-cols-12 mt-[50px]">
                {
                    data.map(singleData => <SingleHomeService key = {singleData._id} data = {singleData}></SingleHomeService>)
                }
            </div>
        </div>
    )
}
export default OurService