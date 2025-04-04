"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import Image from "next/image";
import logo from "@/logos/logo-modelo-c-header.svg"

const links = [
  { name: "Início", path: "#inicio" },
  { name: "Manifesto", path: "#manifesto" },
  { name: "Pontos de Partida", path: "#partida" },
  { name: "Modelo C 2.0", path: "#modeloc" },
  { name: "Realizadores", path: "#realizadores" },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;

      links.forEach(({ path }) => {
        if (path.startsWith("#")) {
          const section = document.querySelector(path);
          if (section) {
            const offsetTop =
              section.getBoundingClientRect().top + window.scrollY;
            const offsetBottom = offsetTop + section.clientHeight;

            if (
              scrollPosition >= offsetTop - 200 &&
              scrollPosition < offsetBottom - 10
            ) {
              setActiveSection(path);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 border rounded-full border-custom-purple bg-custom-purple text-black">
          <Menu size={22} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-5 flex flex-col justify-between pb-20">
        <nav className="flex flex-col gap-4 pt-20">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={(event) => handleScroll(event, link.path)}
              className={`text-md font-medium ${
                activeSection === link.path
                  ? "bg-custom-purple border-custom-purple text-white"
                  : "border-black text-black"
              } pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium text-sm cursor-pointer transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Image src={logo} alt="Modelo C 2.0" width={300}/>
      </SheetContent>
    </Sheet>
  );
}
