import DownloadForm from "./download-form";

export default function FormSection() {
  return (
    <div className="flex flex-col md:flex-row w-full pl-5 md:pl-24">
      <div className="w-full md:w-[50%]">
        <div>
          <span className="pt-4.5 pb-4.5 pl-8 pr-8 rounded-full font-medium bg-custom-purple text-title">
            Materiais
          </span>
        </div>

        <div>
          <h2 className="hidden md:block pt-20 pb-10 font-medium text-title leading-tight">
            Preencha o <br />
            formulário e baixe
            <br /> a nova publicação
          </h2>
          <h2 className="md:hidden lg:hidden pt-20 pb-10 font-medium text-title leading-tight">
            Preencha o formulário e baixe a nova publicação
          </h2>
          <div className="flex flex-col gap-">
            {/* <p className="text-xl text-gray-400">Em breve: mais materiais</p> */}
            {/* <p className="text-sm">
            Valorizamos a sua privacidade. Todos os dados fornecidos são protegidos de acordo com a nossa política de privacidade, garantindo total segurança e confidencialidade. Para mais detalhes, consulte a nossa Política de Privacidade.
            </p> */}
          </div>
        </div>
      </div>
      <div className="bg-custom-purple w-full md:w-[50%] p-5 md:p-16 rounded-tl-lg rounded-bl-lg">
        <h2 className="hidden md:block md:pt-10 md:pb-10 text-title text-white leading-tight">
          Integre estratégia e <br />
          <span className="font-medium">impacto social</span> <br />
          de forma completa!
        </h2>
        <div>
          <DownloadForm />
        </div>
      </div>
    </div>
  );
}
