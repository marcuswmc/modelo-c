import logo from "@/logos/logo-modelo-c-header.svg"
import Image from "next/image"
import DesktopNav from "./desktop-nav"


export default function Header() {
  return (
    <div className="w-full pl-24 pr-24 pt-8 pb-8 flex justify-between items-center">
      <div>
        <Image src={logo} alt="Modelo C 2.0"/>
      </div>
      <div>
        <DesktopNav />
      </div>
      <div>
        {/* buttom */}
      </div>
    </div>
  )
}
