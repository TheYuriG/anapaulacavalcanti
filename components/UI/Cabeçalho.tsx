export function Cabeçalho() {
  return (
    <header class="bg-corPrimaria shadow-md text-corClaraParaTexto text-shadow-corEscuraParaTexto">
      <nav class="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div class="text-4xl font-bold font-bonita drop-shadow-texto">
          <a href="/">Ana Paula Cavalcanti</a>
        </div>
        <ul class="flex space-x-8 drop-shadow-texto">
          <li>
            <a href="#tratamentos" class="text-lg">Tratamentos</a>
          </li>
          <li>
            <a href="#sobre" class="text-lg">Sobre</a>
          </li>
          <li>
            <a href="#contato" class="text-lg">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
