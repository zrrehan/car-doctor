"use client";
import Link from "next/link";
import SocialAuth from "../../SocialAuth";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
        function passwordEyeClick() {
            setShowPassword(!showPassword)
        }
    return(
        <fieldset className="fieldset border-base-300 rounded-box border p-[75px]">
            <h1 className="text-[40px] font-semibold text-center">Log In</h1>

            <label className="label mt-[10px] ">Email</label>
            <input type="email" className="input lg:w-[461px]" placeholder="Your Email" />

            <label className="label mt-[10px]">Password</label>
            <input type={showPassword ? "text" : "password"} className="input lg:w-[461px]" placeholder="Your Password" />
            <button onClick={passwordEyeClick} className="z-10 w-fit relative -top-[38px] left-[170px] lg:left-[430px]">
                {
                    !showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />
                }
            </button>
            <button className="btn mt-[10px] rounded-lg bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">Login</button>
            <SocialAuth actionName={"Sign In"}></SocialAuth>
            <p className="text-[#737373] text-center mt-5 text-[18px]">
                Have an account? <Link href = "/signup" className="text-[#FF3811]">Sign Up</Link>
            </p>
        </fieldset>
    )
}

export default LoginForm;