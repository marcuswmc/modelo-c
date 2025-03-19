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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium text-sm cursor-pointer"
            } hover:bg-custom-purple hover:border-custom-purple transition-colors`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}







// export default function DesktopNav() {
//   return (
//     <nav>
//       <ul className="flex gap-8">
//         <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Inicio</button>  
//         <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Manifesto</button> 
//         <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer">Modelo C 2.0</button> 
//         <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium hover:bg-custom-purple hover:border-custom-purple transition-colors text-sm cursor-pointer ">Realizadores</button> 
//       </ul> 
//     </nav>
//   )
// }
