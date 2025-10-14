"use client";
import Link from "next/link";
import SocialAuth from "../../SocialAuth";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { signIn } from "next-auth/react"

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    function passwordEyeClick() {
        setShowPassword(!showPassword)
    }

    async function loginFormHandler(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value]
        const response = await signIn("credentials", {email, password, redirect: false} );
        console.log(response);
    }

    return(
        <div className="border-base-300 rounded-box border p-[75px]">
            <form onSubmit = {loginFormHandler} className="fieldset">
                <h1 className="text-[40px] font-semibold text-center">Log In</h1>

                <label className="label mt-[10px] ">Email</label>
                <input type="email" name = "email" className="input lg:w-[461px]" placeholder="Your Email" />

                <label className="label mt-[10px]">Password</label>
                <input type={showPassword ? "text" : "password"} name = "password" className="input lg:w-[461px]" placeholder="Your Password" />
                <button onClick={passwordEyeClick} className="z-10 w-fit relative -top-[38px] left-[170px] lg:left-[430px]">
                    {
                        !showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />
                    }
                </button>
                <button className="btn mt-[10px] rounded-lg bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">Login</button>
            </form>
            <SocialAuth actionName={"Sign In"}></SocialAuth>
            <p className="text-[#737373] text-center mt-5 text-[18px]">
                Have an account? <Link href="/signup" className="text-[#FF3811]">Sign Up</Link>
            </p>
        </div>
    )
}

export default LoginForm;