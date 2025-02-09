import { useState } from "preact/hooks";
import { BotaoComWhatsapp } from "../components/BotaoComWhatsapp.tsx";

export function FormulárioDeContato() {
  const [nome, atualizarNome] = useState("");
  const [mensagem, atualizarMensagem] = useState("");

  return (
    <section id="contato" class="py-10 text-center bg-corContrastante">
      <h2 class="text-3xl font-semibold mb-6">
        Entre em contato
      </h2>
      <form class="max-w-lg mx-auto bg-corSecundaria p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            class="w-full p-3 border rounded-md"
            value={nome}
            onInput={(e) => {
              const { target } = e;
              if (target) {
                const changedValue = (target as HTMLInputElement).value;
                atualizarNome(changedValue);
              }
            }}
          />
        </div>
        <div class="mb-4">
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={4}
            class="w-full p-3 border rounded-md"
            value={mensagem}
            onInput={(e) => {
              const { target } = e;
              if (target) {
                const changedValue = (target as HTMLInputElement).value;
                atualizarMensagem(changedValue);
              }
            }}
          >
          </textarea>
        </div>
        <BotaoComWhatsapp
          texto="Entrar em contato"
          link={`https://wa.me//5527999525920?text=Ol%C3%A1,%20Ana%20Paula.%20Tudo%20bom?%0AMeu%20nome%20é%20${
            encodeURI(nome.trim())
          }.%0A${encodeURI(mensagem.trim())}`}
        />
      </form>
    </section>
  );
}
