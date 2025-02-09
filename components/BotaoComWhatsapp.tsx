import { WhatsappLogoSVG } from "./UI/WhatsappSVG.tsx";

export function BotaoComWhatsapp(
  { texto, link }: { texto: string; link: string },
) {
  return (
    <a href={link} target="_blank">
      <button
        type="button"
        class="mt-6 px-6 py-3 shadow-lg bg-corPrimaria text-corEscuraParaTexto font-semibold rounded-full transition flex gap-1 mx-auto items-center hover:bg-corParaBotoes"
      >
        <span>{texto}</span>
        <WhatsappLogoSVG />
      </button>
    </a>
  );
}
