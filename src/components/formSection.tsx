"use client";

import { motion } from "framer-motion";
import DownloadForm from "./download-form";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          className="md:pt-5"
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
            Acesse e experimente <br />a nova versão do Modelo C!
          </h2>
          <h2 className="md:hidden lg:hidden pt-10 pb-10 font-medium text-title leading-tight">
            Acesse e experimente a nova versão do Modelo C!
          </h2>
          <div className="hidden md:flex flex-col gap-5">
            <div className="m-auto ml-0">
              <div className="rounded-md p-2 shadow hover:translate-y-2.5 transition-transform">
                <Link href={"/frame-impressao-pt.pdf"}>
                  <Image
                    src="/thumb-frame.png"
                    alt="Frame para impressão modelo c"
                    width={200}
                    height={200}
                    quality={100}
                  />
                </Link>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-gray-600">
                <span className="font-medium">Frame Modelo C</span> para
                impressão
              </p>
              <DownloadIcon size={18} />
            </div>
          </div>
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
          className="hidden md:block md:pb-10 text-title text-white leading-tight"
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
      <div className="flex md:hidden flex-col gap-5 items-center mt-20">
        <div className="flex gap-2 items-center">
          <p className="text-gray-600 text-xl">
            <span className="font-medium text-2xl">Frame Modelo C</span> para impressão
          </p>
          <DownloadIcon size={18} />
        </div>
        <div className="m-auto">
          <div className="rounded-md p-2 shadow hover:translate-y-2.5 transition-transform">
            <Link href={"/frame-impressao-pt.pdf"} target={"_blank"}>
              <Image
                src="/thumb-frame.png"
                alt="Frame para impressão modelo c"
                width={300}
                height={300}
                quality={100}
                
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
