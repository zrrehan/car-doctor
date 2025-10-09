import Image from "next/image";
import authImage from "../../../../assets/images/login/login.svg"
import SignUpForm from "./Component/SignUpForm";
function Register() {
    return(
        <div className="flex flex-col xl:flex-row  items-center justify-between px-10 lg:px-30">
            <Image src = {authImage} width={460} height={502} alt = "Image"></Image>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Register;