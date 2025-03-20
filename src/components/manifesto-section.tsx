"use client";

import { motion } from "framer-motion";

export default function ManifestoSection() {
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
        <span className="pt-4.5 pb-4.5 pl-8 pr-8 rounded-full font-medium bg-custom-yellow text-title">
          Manifesto
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
          A integração crítica <br />
          precisa ganhar terreno
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
          {[
            `Precisamos avançar em práticas e reflexões integrativas que, de forma crítica e responsável, favoreçam um enfrentamento mais efetivo das desigualdades, injustiças sociais e dos desafios ambientais complexos. Há tempos testemunhamos os efeitos negativos da predominância de uma perspectiva de modernidade que fragmenta, isola e desconecta partes de um todo - seja no nível individual, social ou ambiental.`,
            `Vemos isso em ideias e produções voltadas para soluções temporárias ou interesses particulares; em ações e decisões que ignoram as conexões profundas entre elementos, seres e biomas em toda sua diversidade; histórias contadas por apenas uma voz, desconexas de tantas outras que compõem de modo imbricado um mesmo momento e realidade temporal; em teorias e modelos isolados, rigidamente presos às suas próprias certezas - e em tantos outros fenômenos que reforçam essa lógica fragmentada.`,
            `Diante desse cenário, temos duas escolhas: aceitar e reproduzir essas estruturas ou buscar rupturas, novas perspectivas e mudanças que promovam mais consciência, integração, justiça e equidade. Precisamos de mais agentes sistêmicos de transformação, atuando com maturidade e comprometidos com impactos positivos. Para isso, necessitamos de modelos (e antimodelos) que ampliem nosso repertório de ação.`,
            `Este material reitera a nossa intenção de seguir contribuindo para o campo de impacto socioambiental, para as organizações e para as pessoas do ecossistema! Assim, as convidamos a explorar o Modelo C, a refletir, construir e se comprometer com um olhar mais integrado e sistêmico, que reconheça a complexidade e a interdependência entre impacto e negócio, pessoas e territórios, presente e futuro. Que esse seja um instrumento vivo, capaz de estimular novas perguntas, fortalecer caminhos e impulsionar transformações que sejam, de fato, relevantes para o mundo que queremos construir.`,
          ].map((text, index) => (
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
