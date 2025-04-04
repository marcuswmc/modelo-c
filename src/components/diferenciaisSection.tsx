"use client";

import { motion } from "framer-motion";
import icon from "../icons/bullet-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function DiferenciaisSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-custom-yellow w-full md:pt-20 md:w-[50%] pl-5 p-14 md:pl-24 rounded-tr-lg rounded-br-lg"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="pt-4 pb-4 pl-8 pr-8 rounded-full font-medium bg-custom-green text-tag">
            Diferenciais
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="pt-10 pb-10 font-medium text-title md:pt-20">
            Os principais diferenciais <br className="hidden md:block" /> do
            Modelo C 2.0 são:
          </h2>
          <div className="space-y-6">
            {[
              "Atualização de termos e conceitos",
              "Nova imagem orientadora",
              "Maior potência na integração de dimensões",
              "Novas camadas transversais para a modelagem de negócios de impacto",
              "Mais recursos de apoio para facilitar construções e desdobramentos",
              "Ampliação do olhar para a gestão estratégica",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex gap-x-5 items-start"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image src={icon} alt="Ícone de bullet" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className=" w-full md:w-[50%] p-5 md:p-14 flex flex-col justify-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="md:pt-10 md:pb-10 text-[38px] md:text-title leading-tight"
        >
          Quer conhecer a{" "}
          <span className="font-medium">
            versão original do{" "}
            <span className="text-custom-purple">Modelo C</span>
          </span>
          , altamente utilizada por{" "}
          <span className="font-medium">negócios de impacto</span> no Brasil?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start mt-4">
            <Link
              href="https://www.cmodel.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 bg-custom-purple pt-1.5 pb-1.5 pl-5 pr-5 rounded-full border font-medium text-sm cursor-pointer"
            >
              Baixe o modelo c original aqui
              <Download size={16} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
