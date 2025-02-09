import { PageProps } from "$fresh/server.ts";
import { Cabeçalho } from "../components/UI/Cabeçalho.tsx";
import { Rodapé } from "../components/UI/Rodapé.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout">
      {/* Header */}
      <Cabeçalho />

      <Component />

      <Rodapé />
    </div>
  );
}
