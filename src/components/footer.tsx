import logo from "@/logos/logo-modelo-c-header.svg";
import Image from "next/image";
import DesktopNav from "./desktop-nav";
import licenseLogo from "@/logos/license.png";
import Link from "next/link";



export default function Footer() {
  return (
    <div>
      <div className="w-full pl-24 pr-24 pt-14 pb-8 justify-between items-center border-t border-black hidden md:flex lg:flex bg-custom-yellow">
        <div>
          <Image src={logo} alt="Modelo C 2.0" />
        </div>
        <div className="hidden md:flex lg:flex">
          <DesktopNav />
        </div>
      </div>

      <div className="pt-10 pl-24 pr-24 flex flex-col justify-center items-center bg-custom-yellow">
        <div>
          <Image
            src={licenseLogo}
            alt="grupo O boticario"
            quality={100}
            width={110}
          />
        </div>
        <Link href={"https://creativecommons.org/licenses/by-sa/4.0/"}>
          <h2 className="pt-5 pb-10 font-regular text-[14px] leading-tight text-center">
            Modelo C 2.0 © 2025 by Move Social e Sense Lab is licensed under CC
            BY-SA 4.0.
            <br />
            To view a copy of this license, clique HERE.
          </h2>
        </Link>
      </div>
      <div className="py-1 bg-black/90 flex items-center justify-center">
        <Link href={"https://www.instagram.com/modeloc2/"} className=" flex justify-center items-center gap-1">
        <p className="text-white text-[12px] font-light leading-tight tracking-wide">
          Developed by
        </p>
          <Image src="/marcus-thumb.png" alt="Marcus Oliveira" width={30}height={30} quality={100}/>
        </Link>
      </div>
    </div>
  );
}
