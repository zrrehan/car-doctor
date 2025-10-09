import Image from "next/image";
import authImage from "../../../../assets/images/login/login.svg"
import LoginForm from "./component/LoginForm";
function Login() {
    return (
        <div className="flex flex-col xl:flex-row gap-5 items-center justify-between px-10 lg:px-30">
            <Image src={authImage} width={460} height={502} alt="Image"></Image>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login;