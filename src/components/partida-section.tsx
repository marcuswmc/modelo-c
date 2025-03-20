import icon from "../icons/bullet-icon.svg";
import Image from "next/image";

export default function PartidaSection() {
  return (
    <div className="w-full pl-5 pr-5 md:pl-24 md:pr-24 md:justify-items-normal">
      <div>
        <span className="pt-4.5 pb-4.5 pl-8 pr-8 rounded-full font-medium bg-custom-green text-[30px]  md:text-title">
          Pontos de Partida
        </span>
      </div>

      <div className="justify-items-start md:flex md:justify-between md:items-start md:gap-x-16">
        <div className="md:w-1/2">
          <h2 className="pt-10 pb-10 font-medium text-title md:pt-20">
            Para quê serve?
          </h2>
          <div className="space-y-6">
            {[
              "Para apoiar o diagnóstico, a criação e gestão de negócios que buscam integrar efetivamente seu modelo de operação produtiva e comercial com a lógica de geração de impacto socioambiental positivo.",
              "Para que negócios de impacto amadureçam, se tornando mais capazes de alcançar seus planos e ambições com fluxos financeiros e equipes saudáveis.",
              "Para problematizar, provocar e inquietar empreendedores(as) e equipes sobre a forma como concebem e gerenciam os negócios em que estão inseridos.",
              "Para alinhar times e parceiros de negócios de impacto ao redor de seu propósito e modelo de operação produtiva e comercial.",
              "Para criar possibilidades de uma comunicação mais compreensível entre o negócio e seus diferentes públicos de interesse.",
            ].map((text, index) => (
              <div key={index} className="flex gap-x-5 items-start">
                <Image src={icon} alt="Ícone de bullet"/>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="pt-10 pb-10 font-medium text-title md:pt-20">Para quem é?</h2>
          <div className="space-y-6">
            {[
              "Quem deseja criar ou lidera e opera um negócio de impacto - empreendedores/as e equipes.",
              "Quem busca reinventar sua organização - organizações em transição para a lógica de negócio de impacto.",
              "Quem assessora e apoia o amadurecimento de negócios de impacto - aceleradoras, incubadoras e outras intermediárias.",
              "Quem financia negócios de impacto - investidores de impacto, fundos, entre outros.",
              "Quem ensina a temática - docentes de instituições de ensino, mentores(as) e outras.",
              "Qualquer pessoa interessada na temática de gestão de impacto.",
            ].map((text, index) => (
              <div key={index} className="flex gap-x-5 items-start">
                <Image src={icon} alt="Ícone de bullet" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
