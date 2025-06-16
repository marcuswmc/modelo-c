import DiferenciaisSection from "@/components/diferenciaisSection";
import FormSection from "@/components/formSection";
import Hero from "@/components/hero";
import ManifestoSection from "@/components/manifesto-section";
import PartidaFunction from "@/components/partida-section";
import RealizadoresSection from "@/components/realizadores-section";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

function getImageUrl(locale: string): string {
  switch (locale) {
    case 'pt':
      return "/images/hero-balance.png";
    case 'en':
      return "/images/hero-balance_EN.png";
    case 'es':
      return "/images/hero-balance_ES.png";
    default:
      return "/images/hero-balance.png";
  }
}

export default async function Home({ params }: PageProps) {
  const {locale} = await params
  const imageUrl = getImageUrl(locale)

  return (
    <>
      <div className="w-full pt-10 mt-12 md:mt-0 md:pt-20 lg:pt-20 flex-col space-y-28 overflow-hidden">
        <div id="inicio" className="scroll-mt-36">
          <Hero imageUrl={imageUrl}/>
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

