"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Manifesto",
    path: "#manifesto",
  },
  {
    name: "Modelo C 2.0",
    path: "#modeloc",
  },
  {
    name: "Realizadores",
    path: "#realizadores",
  },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "hover:bg-custom-purple border-custom-purple bg-custom-purple transition-colors"
            } pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border border-black font-medium text-sm cursor-pointer hover:border-custom-purple hover:bg-custom-purple`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}







