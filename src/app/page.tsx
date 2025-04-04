import DiferenciaisSection from "@/components/diferenciaisSection";
import FormSection from "@/components/formSection";
import Hero from "@/components/hero";
import ManifestoSection from "@/components/manifesto-section";
import PartidaFunction from "@/components/partida-section";
import RealizadoresSection from "@/components/realizadores-section";

export default function Home() {
  return (
    <>
      <div className="w-full pt-10 mt-12 md:mt-0 md:pt-20 lg:pt-20 flex-col space-y-28 overflow-hidden">
        <div id="inicio" className="scroll-mt-36">
          <Hero />
        </div>
        <div id="manifesto" className="scroll-mt-24">
          <ManifestoSection />
        </div>
        <div id="partida">
          <PartidaFunction />
        </div>
        <div id="modeloc" className="scroll-mt-24">
          <FormSection />
        </div>
        <div id="diferenciais" className="scroll-mt-24">
          <DiferenciaisSection />
        </div>
        <div id="realizadores" className="scroll-mt-24">
          <RealizadoresSection />
        </div>
      </div>
    </>
  );
}
