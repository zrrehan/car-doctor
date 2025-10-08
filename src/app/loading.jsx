"use client";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lotties/loading.json"

function Loading() {
    return(
        <div>
            <Lottie className="h-[300px]" animationData={loadingAnimation} loop={true} />
        </div>
    )
}

export default Loading;