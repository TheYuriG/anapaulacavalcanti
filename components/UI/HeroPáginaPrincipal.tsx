import { BotaoComWhatsapp } from "../BotaoComWhatsapp.tsx";

export function HeroPáginaPrincipal() {
  return (
    <section class="text-white text-center py-20">
      <h1 class="text-4xl font-semibold mb-4">
        Tratamentos capilares e serviços de beleza
      </h1>
      <p class="text-xl">
        Melhore sua beleza natural com cuidado profissional.
      </p>
      <BotaoComWhatsapp
        texto="Agende uma consulta"
        link="https://wa.me//5527999525920?text=Ol%C3%A1,%20Ana%20Paula.%20Tudo%20bom?%0AVi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20voc%C3%AA."
      />
    </section>
  );
}
