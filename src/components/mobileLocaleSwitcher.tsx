"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe, Check } from "lucide-react";

const locales = [
  { code: "pt", label: "PT", flag: "PT", name: "Português" },
  { code: "en", label: "EN", flag: "EN", name: "English" },
  { code: "es", label: "ES", flag: "ES", name: "Español" },
];

export default function MobileLocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          flex items-center gap-2 px-3 py-2 rounded-lg
          border border-gray-200 bg-white text-gray-700
          active:scale-95 transition-transform duration-150
          hover:border-custom-purple hover:text-custom-purple
        "
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLocale.label}</span>
      </button>

      {/* Mobile Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
          <div 
            className={`
              w-full max-w-sm mx-4 mb-4 bg-white rounded-2xl shadow-2xl
              animate-in slide-in-from-bottom-4 fade-in duration-300
            `}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-custom-purple" />
                  <h3 className="font-semibold text-gray-900">Escolher idioma</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl text-gray-400">×</span>
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="py-2">
              {locales.map(({ code, label, flag, name }) => (
                <button
                  key={code}
                  onClick={() => handleChange(code)}
                  className={`
                    w-full flex items-center gap-4 px-6 py-4 text-left
                    transition-colors duration-200
                    active:bg-purple-50
                    ${code === currentLocale.code 
                      ? 'bg-purple-50 text-custom-purple' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="text-2xl">{flag}</span>
                  <div className="flex-1">
                    <div className="font-medium">{name}</div>
                  </div>
                  {code === currentLocale.code && (
                    <div className="w-6 h-6 rounded-full bg-custom-purple flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}