export function Funcionalidades(
  { funcionalidades }: { funcionalidades: Array<[string, string]> },
) {
  return (
    <section
      id="tratamentos"
      class="pt-8 pb-10 px-20 bg-corContrastante text-center"
    >
      <h2 class="text-3xl font-semibold mb-6">Meus tratamentos</h2>
      <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {funcionalidades.map((item) => {
          const [título, descrição] = item;
          return (
            <div class="bg-corSecundaria p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold mb-2">{título}</h3>
              <p>
                {descrição}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
