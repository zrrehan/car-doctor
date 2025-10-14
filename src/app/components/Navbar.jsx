"use client";
import Image from "next/image"
import Link from "next/link"
import logo from "../../../assets/logo.svg"
import { IoIosLogIn } from "react-icons/io"
import { useSession } from "next-auth/react"
import useUserInfo from "@/customHooks/useUserInfo";


function Navbar() {
    const links = <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 font-semibold text-lg">
        <Link className="navbar-links" href = "/">Home</Link>
        <Link className="navbar-links" href="/">About</Link>
        <Link className="navbar-links" href="/">Service</Link>
        <Link className="navbar-links" href="/">Blog</Link>
        <Link className="navbar-links" href="/">Contact</Link>
    </div>

    const { imgUrl } = useUserInfo();
    return(
        <div className="mb-[50px]">
            <div className="navbar bg-base-100 max-w-[1140px] w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="">
                        <Image src={logo} width={107} height={88} alt="logo"></Image>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    {
                        imgUrl ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={imgUrl} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </>
                            : <Link href="/signup" className="btn btn-outline font-semibold text-lg py-[15px] px-[51px] rounded-md border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Sign Up</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar