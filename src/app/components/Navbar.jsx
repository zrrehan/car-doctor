import Image from "next/image"
import Link from "next/link"
import logo from "../../../assets/logo.svg"


function Navbar() {
    const links = <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 font-semibold text-lg">
        <Link href = "/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Service</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
    </div>
    return(
        <div className="navbar bg-base-100 lg:px-[150px]">
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
                    <Image src = {logo} width={107} height={88}></Image>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline font-semibold text-lg py-[15px] px-[51px] rounded-md border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Sign Up</a>
            </div>
        </div>
    )
}

export default Navbar