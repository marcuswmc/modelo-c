"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState("");

  const t = useTranslations("navLinks");
  const linkKeys = [
    "home",
    "manifest",
    "startingPoints",
    "cmodelGuide",
    "partners",
  ];

  const navLinks = linkKeys.map((key) => ({
    key,
    name: t(`${key}.name`),
    path: t(`${key}.path`),
  }));

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY;

      navLinks.forEach(({ path }) => {
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
    <nav className="flex gap-6">
      {navLinks.map(({ key, name, path }) => (
        <Link
          href={path}
          key={key}
          onClick={(event) => handleScroll(event, path)}
          className={`${
            activeSection === path
              ? "bg-custom-purple border-custom-purple text-white"
              : "border-black text-black"
          } flex flex-col justify-center pt-1 pb-1 pl-5 pr-5 rounded-full border font-medium text-[14px] cursor-pointer transition-colors`}
        >
          {name}
        </Link>
      ))}

      <div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
