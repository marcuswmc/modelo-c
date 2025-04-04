"use client";

import { motion } from "framer-motion";
import DownloadForm from "./download-form";

export default function FormSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row w-full pl-5 md:pl-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-[50%]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="pt-4 pb-4 pl-8 pr-8 rounded-full font-medium bg-custom-purple text-tag">
          Guia Modelo C 2.0
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="hidden md:flex pt-10 md:pt-20 pb-10 font-medium text-title leading-tight">
          Acesse e experimente <br/>a nova versão do Modelo C!
          </h2>
          <h2 className="md:hidden lg:hidden pt-10 pb-10 font-medium text-title leading-tight">
          Acesse e experimente a nova versão do Modelo C!
          </h2>
          <div className="flex flex-col gap-"></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-custom-purple w-full md:w-[50%] p-5 md:p-14 rounded-tl-lg rounded-bl-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden md:block md:pt-10 md:pb-10 text-title text-white leading-tight"
        >
          Preencha o <br />
            formulário e baixe
            <br /> a nova publicação
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <DownloadForm />
        </motion.div>

        
      </motion.div>
    </motion.div>
  );
}
