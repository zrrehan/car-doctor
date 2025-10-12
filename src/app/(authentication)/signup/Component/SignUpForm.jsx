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
import { registerUser } from "./registerUser";


function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    function passwordEyeClick() {
        setShowPassword(!showPassword)
    }

    function formSubmitHandler(event) {
        event.preventDefault()

        setLoading(true);
        const form = event.target;
        
        const [name, email, password] = [ 
            form.name.value, form.email.value, form.password.value
        ]
        if(name === "" || email === "" || password === "" || image == null) {
            setLoading(false);
            Swal.fire({
                title: "Fillup All Input Fields",
                icon: "error",
                showConfirmButton: false,
                timer: 1500
            });
            return 
        }

        const data = {name, email, password}

        const formData = new FormData();
        formData.append("image", image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imgbb_api}`, {
            method: "POST", 
            body: formData
        }).then(res => res.json())
            .then(imgbbData => {
                console.log(imgbbData.data.display_url);
                data.imgUrl = imgbbData.data.display_url;
                data.imgDeleteUrl = imgbbData.data.delete_url;
                registerUser(data)
                    .then((res) => {
                        setLoading(false);
                        Swal.fire({
                            title: res.message,
                            icon: res.status, 
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            })
        event.target.reset();
    }

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0]);
        if(!acceptedFiles[0].type.includes("image")) {
            Swal.fire({
                title: "Enter an Image File",
                icon: "error", 
                showConfirmButton: false,
                timer: 2000
            });
            setImage(null)
        } else {
            setImage(acceptedFiles);
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return(
        <div className="border-base-300 rounded-box border p-[30px]">
            <form onSubmit={formSubmitHandler} className="fieldset  ">
                <h1 className="text-[40px] font-semibold text-center">Sign Up</h1>

                <label className="label ">Name</label>
                <input type="text" className="input lg:w-[461px]" placeholder="Your Name" name="name" />

                <label className="label mt-[10px] ">Email</label>
                <input type="email" className="input lg:w-[461px]" placeholder="Your Email" name="email" />

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
                                        <CiImageOn size={24} />
                                        <p>{image[0].name}</p>
                                    </div>
                                        : <SlCloudUpload size={34} />
                                }
                            </div>
                    }
                </div>

                <label className="label mt-[10px]">Password</label>
                <input type={showPassword ? "text" : "password"} className="input lg:w-[461px]" placeholder="Your Password" name="password" />
                <span onClick={passwordEyeClick} className="z-10 w-fit relative -top-[38px] left-[155px] lg:left-[430px]">
                    {
                        !showPassword ? <IoIosEyeOff size={24} /> : <IoIosEye size={24} />
                    }
                </span>
                <button disabled={loading} className="btn mt-[10px] rounded-lg bg-[#FF3811] font-semibold text-white border-0 shadow-sm shadow-[#FF3811]">
                    {
                        loading ? <h1 className="flex items-center gap-2">
                            <span className="loading loading-spinner loading-sm"></span>
                            <span>Loading</span>
                        </h1>
                            : <p>Register Now</p>
                    }
                </button>
            </form>
            <SocialAuth actionName={"Sign Up"}></SocialAuth>
            <p className="text-[#737373] text-center mt-5 lg:text-[18px]">
                Already have an account? <Link href="/login" className="text-[#FF3811]">Log In</Link>
            </p>
        </div>
        
    )
}

export default SignUpForm;