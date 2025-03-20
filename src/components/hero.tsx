import logo from "@/logos/modelo-c-hero.svg";
import heroBalance from "@/logos/hero-balance.png";

import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row lg:fle-row items-start md:items-center pl-5 pr-5  md:pl-24 md:pr-24 ">
      <div className="flex flex-col gap-16 w-full md:w-[50%] lg:w-[50%] md:pr-10">
        <div>
          <Image src={logo} alt="Modelo C 2.0" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm">
            <span className="font-medium">O Modelo C é mais do que uma ferramenta</span> — é um caminho para
            fortalecer negócios de impacto socioambiental que transformam o mundo
            sem abrir mão da viabilidade econômica. Na versão 2.0, ele evolui
            sem perder sua essência: integrar de forma coerente impacto social e
            ambiental com lógica comercial e financeira.
          </p>
          <p>
            <span className="font-medium">A letra C continua a representar o que faz do Modelo C um
            diferencial</span>: Completo, Colaborativo, Conectado à Complexidade e
            Compreensível. Um modelo para negócios que querem crescer com
            propósito e gerar mudanças relevantes.
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-end w-full md:w-[50%] lg:w-[50%]">
        <Image src={heroBalance} alt="balance" width={550} quality={100} />
      </div>
    </div>
  );
}
