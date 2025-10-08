import Image from "next/image";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import OurService from "./components/OurServices/OurService";

export default function Home() {
    return (
        <div className="space-y-[130px]">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurService></OurService>
        </div>
    );
}
