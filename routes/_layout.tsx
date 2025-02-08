import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout">
      {/* Header */}
      <header class="bg-corPrimaria shadow-md text-corDeTexto">
        <nav class="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <div class="text-4xl font-bold text-corDeFundo font-bonita">
            <a href="/">Ana Paula Cavalcanti</a>
          </div>
          <ul class="flex space-x-8">
            <li>
              <a href="#pacotes" class="text-lg">Pacotes</a>
            </li>
            <li>
              <a href="#about" class="text-lg">About</a>
            </li>
            <li>
              <a href="#contact" class="text-lg">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Component />

      {/* Footer */}
      <footer class="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          Ana Paula Cavalcanti. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
