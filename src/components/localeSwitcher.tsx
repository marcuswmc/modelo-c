"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { ChevronDown, Globe, Check } from "lucide-react";

const locales = [
  { code: "pt", label: "PT", flag: "PT", name: "Português" },
  { code: "en", label: "EN", flag: "EN", name: "English" },
  { code: "es", label: "ES", flag: "ES", name: "Español" },
];

export default function DesktopLocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group flex items-center gap-2 px-4 py-2.5 rounded-full
          border-2 transition-all duration-300 ease-out
          hover:shadow-lg hover:scale-105 active:scale-95
          ${isOpen 
            ? 'border-custom-purple bg-custom-purple text-white shadow-lg shadow-purple-200' 
            : 'border-gray-200 bg-white text-gray-700 hover:border-custom-purple hover:bg-purple-50'
          }
        `}
      >
        <Globe className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:rotate-12'}`} />
        <span className="font-medium text-[14px]">{currentLocale.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100
        transition-all duration-300 ease-out origin-top-right z-50
        ${isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }
      `}>
        <div className="py-2">
          {locales.map(({code, flag }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left
                transition-all duration-200 ease-out
                hover:bg-purple-50 hover:translate-x-1
                ${locale === code 
                  ? 'bg-purple-50 text-custom-purple border-r-2 border-custom-purple' 
                  : 'text-gray-700 hover:text-custom-purple'
                }
              `}
            >
              <span className="text-[14px]">{flag}</span>
              {locale === code && (
                <Check className="w-4 h-4 text-custom-purple animate-in fade-in duration-200" />
              )}  
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}