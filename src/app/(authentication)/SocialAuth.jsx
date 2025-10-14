import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SocialAuth({actionName}) {
    function socialButtonClicked(providerName) {
        console.log("social auth", providerName)
    }
    return( 
        <div>
            <div className="divider">Or {actionName} With</div>
            <div className="flex justify-center gap-10">
                <button onClick={() => socialButtonClicked("github")} className="btn btn-circle">
                    <FaGithub color="#9c45ae" size={24} />
                </button>

                <button onClick={() => socialButtonClicked("google")} className="btn btn-circle">
                    <FcGoogle size={24} />
                </button>
            </div>
        </div>
    )
}