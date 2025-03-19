import logo from "@/logos/modelo-c-hero.svg";
import heroBalance from "@/logos/hero-balance.png";

import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-16 w-[50%]">
        <div>
          <Image src={logo} alt="Modelo C 2.0" />
        </div>
        <div className=" flex flex-col gap-5">
          <p className="text-sm">
            O Modelo C é mais do que uma ferramenta — é um caminho para
            fortalecer negócios impacto socioambiental que transformam o mundo
            sem abrir mão da viabilidade econômica. Na versão 2.0, ele evolui
            sem perder sua essência: integrar de forma coerente impacto social e
            ambiental com lógica comercial e financeira.
          </p>
          <p>
            A letra C continua a representar o que faz do Modelo C um
            diferencial: Completo, Colaborativo, Conectado à Complexidade e
            Compreensível. Um modelo para negócios que querem crescer com
            propósito e gerar mudanças relevantes.
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center">
        <Image src={heroBalance} alt="balance" width={550} quality={100} />
      </div>
    </div>
  );
}
