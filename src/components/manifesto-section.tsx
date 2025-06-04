"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ManifestoSection() {
  const t = useTranslations('manifest')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full pt-20 pb-20 bg-custom-green pl-5 pr-5 md:pl-24 md:pr-24 md:justify-items-normal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="pt-4.5 pb-4.5 pl-8 pr-8 rounded-full font-medium bg-custom-yellow text-tag">
          {t('tag')}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-col items-center md:block"
      >
        <h2 className="pt-10 pb-10 font-medium text-title text-white leading-tight md:pt-20">
          {t('title')}
        </h2> 

 
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }, 
            },
          }}
          viewport={{ once: true }}
        >
          {t.raw('paragraphs').map((text: string, index: number) => (
            <motion.p
              key={index}
              className="text-white md:pr-30 mb-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
