import FormSection from "@/components/formSection";
import Hero from "@/components/hero";
import ManifestoSection from "@/components/manifesto-section";
import RealizadoresSection from "@/components/realizadores-section";

export default function Home() {
  return (
    <>

      <div className="w-full pt-5 md:pt-20 lg:pt-20 flex-col space-y-40">
        <Hero />
        <ManifestoSection/>
        <FormSection />
        <RealizadoresSection/>
      </div>
    </>
  );
}