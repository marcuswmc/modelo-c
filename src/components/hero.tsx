"use client";

import { motion } from "framer-motion";
import logo from "@/logos/modelo-c-hero.svg";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function Hero() {

  const t = useTranslations('hero')

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center pl-5 pr-5 md:pl-24 md:pr-24">
      {/* Texto e logo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-16 w-full md:w-[50%] lg:w-[50%] md:pr-10"
      >
        <div>
          <Image src={logo} alt="Modelo C 2.0" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-5"
        >
          <p className="text-sm">
            <span className="font-medium">
              {t('f-highlight')}
            </span>{" "}
            {t('f-paragraph')}
          </p>
          <p>
            <span className="font-medium">
             {t('s-highlight')}
            </span>
            {t('s-paragraph')}
          </p>
        </motion.div>
      </motion.div>

      {/* Imagem ao lado */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="flex items-center justify-end w-full pt-16 md:pt-0 md:w-[50%] lg:w-[50%]"
      >
        <Image src={t('imageUrl')} alt="balance" width={550} height={550} quality={100} priority/>
      </motion.div>
    </div>
  );
}