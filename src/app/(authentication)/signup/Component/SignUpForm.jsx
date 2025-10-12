"use client";
import Link from "next/link";
import SocialAuth from "../../SocialAuth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { SlCloudUpload } from "react-icons/sl";
import { MdOutlineCloudDone } from "react-icons/md";
import Swal from "sweetalert2";
import { CiImageOn } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";

function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState(null);
    function passwordEyeClick() {
        setShowPassword(!showPassword)
    }

    function formSubmitHandler(event) {
        event.preventDefault()
        const form = event.target;
        
        const [name, email, password] = [ 
            form.name.value, form.email.value, form.password.value
        ]
        console.log(name, email, password)
    }

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0]);
        if(!acceptedFiles[0].type.includes("image")) {
            Swal.fire({
                title: "File Type Error",
                text: "Please Enter an Image File",
                icon: "error"
            });
            setImage(null)
        } else {
            setImage(acceptedFiles);
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return(
        <form onSubmit={formSubmitHandler} className="fieldset border-base-300 rounded-box border p-[30px] ">
            <h1 className="text-[40px] font-semibold text-center">Sign Up</h1>

            <label className="label ">Name</label>
            <input type="text" className="input lg:w-[461px]" placeholder="Your Name" name = "name" />

            <label className="label mt-[10px] ">Email</label>
            <input type="email" className="input lg:w-[461px]" placeholder="Your Email" name = "email" />

            <label className="label mt-[10px] ">Your Image</label>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <div className="border border-green-600 text-green-600 flex justify-center py-5 rounded-md">
                            <MdOutlineCloudDone size={34} />  
                        </div> :
                        <div className="border border-gray-300 text-gray-500 flex justify-center py-5 rounded-md">
                            {
                                image ? <div className="flex flex-col items-center">
                                    <CiImageOn size = {24}/>
                                    <p>{image[0].name}</p>
                                </div>
                                    : <SlCloudUpload size={34} />
                            }
                        </div>
                }
            </div>

            <label className="label mt-[10px]">Password</label>
            <input type={showPassword?"text":"password"} className="input lg:w-[461px]" placeholder="Your Password" name = "password" />
            <button onClick={passwordEyeClick} className="z-10 w-fit relative -top-[38px] left-[170px] lg:left-[430px]">
                {
                    !showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />
                }
            </button>
            <button className="btn mt-[10px] rounded-lg bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">Login</button>
            <SocialAuth actionName={"Sign Up"}></SocialAuth>
            <p className="text-[#737373] text-center mt-5 lg:text-[18px]">
                Already have an account? <Link href="/login" className="text-[#FF3811]">Log In</Link>
            </p>
        </form>
    )
}

export default SignUpForm;