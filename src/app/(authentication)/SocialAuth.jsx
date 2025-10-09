import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SocialAuth({actionName}) {
    return( 
        <div>
            <div className="divider">Or {actionName} With</div>
            <div className="flex justify-center gap-10">
                <button className="btn btn-circle">
                    <FaFacebookF color="#3B5998" size={24}/>
                </button>

                <button className="btn btn-circle">
                    <FaLinkedinIn color="#0A66C2" size={24} />
                </button>

                <button className="btn btn-circle">
                    <FcGoogle size={24} />
                </button>
            </div>
        </div>
    )
}