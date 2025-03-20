import logo from "@/logos/logo-modelo-c-header.svg"
import Image from "next/image"
import DesktopNav from "./desktop-nav"



export default function Header() {
  return (
    <div className="w-full h-20 pl-24 pr-24 pt-8 pb-8 justify-between items-center hidden md:flex lg:flex fixed top-0 left-0 bg-white z-50 shadow-md">
      <div>
        <Image src={logo} alt="Modelo C 2.0"/>
      </div>
      <div className="hidden md:flex lg:flex">
        <DesktopNav />
      </div>
    </div>
  )
}
