import Image from 'next/image';

export default function TrabalhosExperiencias() {
  return (
    <div className="p-6 bg-dark-blue text-light-gray">
      {/* Seção de Trabalhos e Experiências */}
      <h1 className="text-3xl font-bold mb-6 text-center">Trabalhos e Experiências</h1>

      {/* Container para o Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Trabalho 1 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col items-center">
          <Image
            src="/ufra-logo.png" // Substitua pelo caminho da logo da Ufra
            alt="Logo da Ufra"
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Analista de Desenvolvimento</h2>
          <p className="mb-1">Ufra - Universidade Federal Rural Da Amazonia</p>
          <p className="mb-1">set de 2022 - o momento</p>
          <p className="mb-2">Belém, Pará, Brasil</p>
    
        </div>

        {/* Trabalho 2 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col items-center">
          <Image
            src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
            alt="Logo da Universidade Federal do Pará"
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2 align-middle">TAE - Técnico em Tecnologia da Informação</h2>
          <p className="mb-1">Universidade Federal do Pará</p>
          <p className="mb-1">set de 2017 - out de 2022</p>
          <p className="mb-2">Belém, Pará, Brasil</p>

        </div>

        {/* Trabalho 3 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col items-center">
          <Image
            src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
            alt="Logo da Universidade Federal do Pará"
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Bolsista</h2>
          <p className="mb-1">Universidade Federal do Pará</p>
          <p className="mb-1">jan de 2014 - dez de 2014</p>
          <p className="mb-2">Belém, Pará, Brasil</p>

        </div>

        {/* Trabalho 4 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col items-center">
          <Image
            src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
            alt="Logo da Universidade Federal do Pará"
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Bolsista</h2>
          <p className="mb-1">Universidade Federal do Pará</p>
          <p className="mb-1">jan de 2012 - jan de 2013</p>
          <p className="mb-2">Belém, Pará, Brasil</p>

        </div>

        {/* Trabalho 5 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col items-center">
          <Image
            src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
            alt="Logo da Universidade Federal do Pará"
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Estagiário</h2>
          <p className="mb-1">Universidade Federal do Pará</p>
          <p className="mb-1">jan de 2009 - jan de 2010</p>
          <p className="mb-2">Belém, Pará, Brasil</p>

        </div>
      </div>
    </div>
  );
}
