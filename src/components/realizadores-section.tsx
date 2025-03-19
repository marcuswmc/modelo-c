import Image from "next/image";
import moveLogo from "@/logos/move-logo.png";
import senselabLogo from "@/logos/sense-lab-logo.png";
import boticarioLogo from "@/logos/boticario-logo.png";
import fundoValeLogo from "@/logos/fundo-vale-logo.png";
import amazLogo from "@/logos/amaz-logo.png";
import sabinLogo from "@/logos/sabin_logo.png";
import iceLogo from "@/logos/ice-logo.jpeg";

export default function RealizadoresSection() {
  return (
    <div id="realizadores" className="flex flex-col w-full p-5 md:pl-24">
      <div>
        <h2 className="pb-10 font-medium text-md leading-tight">
          Criação original:
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
        <h2 className="pt-20 pb-10 font-medium text-md leading-tight">
          Organizações parceiras
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
        <h2 className="pt-20 pb-10 font-medium text-md leading-tight">
          Operação:{" "}
          <span className="font-regular text-sm">
            Latimpacto, Impact Hub Manaus, Governo de Nuevo León (México)
          </span>
        </h2>
      </div>
    </div>
  );
}
