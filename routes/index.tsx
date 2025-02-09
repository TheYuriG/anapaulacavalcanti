import { FormulárioDeContato } from "../islands/FormulárioDeContato.tsx";
import { Funcionalidades } from "../components/UI/Funcionalidades.tsx";
import { HeroPáginaPrincipal } from "../components/UI/HeroPáginaPrincipal.tsx";
import { Sobre } from "../components/UI/Sobre.tsx";

const funcionalidades: Array<[string, string]> = [[
  "Tricoscopia",
  "Tricoscopia é o exame feito para análise do couro cabeludo e da haste capilar.",
], [
  "Terapia Capilar",
  "A terapia capilar auxilia no cuidado e manutenção da saúde dos cabelos, ajudando a manter o aspecto saudável e prevenir problemas.",
], [
  "Microagulhamento Capilar",
  "Tratamento que utiliza microagulhas para perfurar a pele e permitir a infiltração de medicamentos estéreis para estimular crescimento de novos fios.",
]];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroPáginaPrincipal />

      {/* Tratamentos */}
      <Funcionalidades funcionalidades={funcionalidades} />

      {/* Sobre mim */}
      <Sobre />

      {/* Contato */}
      <FormulárioDeContato />
    </div>
  );
}
