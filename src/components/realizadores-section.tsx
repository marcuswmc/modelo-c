import Image from "next/image";
import moveLogo from "@/logos/move-logo.png";
import senselabLogo from "@/logos/sense-lab-logo.png";
import boticarioLogo from "@/logos/boticario-logo.png";
import fundoValeLogo from "@/logos/fundo-vale-logo.png";
import amazLogo from "@/logos/amaz-logo.png";
import sabinLogo from "@/logos/sabin_logo.png";
import iceLogo from "@/logos/ice-logo.jpeg";
import Link from "next/link";


export default function RealizadoresSection() {
  return (
    <div className="flex flex-col w-full p-5 md:pl-24 gap-6">
      <div className="pb-10 md:pb-20">
        <span className="pt-4 pb-4 pl-8 pr-8 rounded-full font-medium bg-custom-green text-tag">
          Realização
        </span>
      </div>
      <div>
        <h2 className="pb-5 font-medium text-sm leading-tight">
        O Modelo C é uma realização de:
        </h2>
        <div className="flex items-center">
          <div>
            <Image src={moveLogo} alt="Move Social" quality={100} width={100} />
          </div>
          <div>
            <Image
              src={senselabLogo}
              alt="Sense lab"
              quality={100}
              width={220}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="pb-5 font-medium text-sm leading-tight">
        Coordenação da versão 2.0:
        </h2>
        <div className="flex items-center">
          <div>
            <Image src={moveLogo} alt="Move Social" quality={100} width={100} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="pb-5 font-medium text-sm leading-tight">
          Patrocínio:
        </h2>
        <div className="flex flex-wrap items-center gap-5">
          <div>
            <Image
              src={boticarioLogo}
              alt="grupo O boticario"
              quality={100}
              width={300}
            />
          </div>
          <div>
            <Image src={iceLogo} alt="ICE" quality={100} width={100} />
          </div>
          <div>
            <Image src={sabinLogo} alt="Sabin" quality={100} width={110} />
          </div>
          <div>
            <Image src={amazLogo} alt="Amaz" quality={100} width={90} />
          </div>
          <div>
            <Image
              src={fundoValeLogo}
              alt="Fundo Vale"
              quality={100}
              width={90}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className=" pb-10 text-[14px] leading-tight">
        *Outras organizações e pessoas contribuíram para a construção das versões do Modelo C,<br/> mais informações podem ser encontradas na <Link href={"#modeloc"} className="font-medium">Ficha Técnica do Guia Modelo C 2.0.</Link>
        </h3>
      </div>
    </div>
  );
}
