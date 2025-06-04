"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";
import icon from "../icons/bullet-icon.svg";
import Image from "next/image";


export default function PartidaSection() {
  const t = useTranslations('partida')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full pl-5 pr-5 md:pl-24 md:pr-24 md:justify-items-normal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="pt-4.5 pb-4.5 pl-8 pr-8 rounded-full font-medium bg-custom-green text-tag">
          {t('tag')}
        </span>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
        className="justify-items-start md:flex md:justify-between md:items-start md:gap-x-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="pt-10 pb-10 font-medium text-title md:pt-20">{t('left-title')}</h2>
          <div className="space-y-6">
            {t.raw('left-paragraphs').map((text: string, index: number) => (
              <motion.div
                key={index}
                className="flex gap-x-5 items-start"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image src={icon} alt="Ícone de bullet" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="pt-10 pb-10 font-medium text-title md:pt-20">{t('right-title')}</h2>
          <div className="space-y-6">
            {t.raw('right-paragraphs').map((text: string, index: number) => (
              <motion.div
                key={index}
                className="flex gap-x-5 items-start"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image src={icon} alt="Ícone de bullet" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
