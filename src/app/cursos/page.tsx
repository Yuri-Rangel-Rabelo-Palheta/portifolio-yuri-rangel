import Image from 'next/image';

export default function Cursos() {
  return (
    <div className="p-6 bg-dark-blue text-light-gray">
      {/* Seção de Cursos */}
      <h1 className="text-3xl font-bold mb-6 text-center">Cursos</h1>

      {/* Container para o Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Curso 1 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
              alt="Universidade Federal do Pará"
              width={80}
              height={80}
              className="mb-4"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Universidade Federal do Pará</h2>
              <p>Bacharelado em Engenharia de Computação</p>
              <p>Ago de 2007 - Nov de 2014</p>
            </div>
          </div>
        </div>

        {/* Curso 2 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src="/cesupa-logo.png" // Substitua pelo caminho da logo do Cesupa
              alt="Cesupa - Centro Universitário do Estado do Pará"
              width={80}
              height={80}
              className="mb-4"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Cesupa - Centro Universitário do Estado do Pará</h2>
              <p>Pós-graduação Lato Sensu - Especialização em Computação Forense</p>
              <p>Jan de 2015 - Jan de 2017</p>
            </div>
          </div>
        </div>

        {/* Curso 3 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src="/ufpa-logo.png" // Substitua pelo caminho da logo da UFPA
              alt="Universidade Federal do Pará"
              width={80}
              height={80}
              className="mb-4"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Universidade Federal do Pará</h2>
              <p>Mestrado em Computação Aplicada</p>
              <p>Fev de 2024 - Em andamento</p>
            </div>
          </div>
        </div>
        
        {/* Continue adicionando mais cursos e certificados conforme necessário */}
      </div>

      <div className="flex flex-col items-center p-4 rounded-lg ">
        {/* Licenças e Certificados */}
        <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Licenças</h1>

        {/* Certificado 1 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src="/udemy-logo.png" // Substitua pelo caminho da logo do Udemy
              alt="Udemy"
              width={80}
              height={80}
              className="mb-4"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">GESTÃO DE CONTAINERS COM DOCKER (EAD)</h2>
            </div>
          </div>
          
        </div>
        </div>
      {/* Seção de Habilidades */}
      <div className='flex flex-col items-center'>
      <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Habilidades</h1>
      <div className="border border-light-gray p-4 rounded-lg w-1/4 items-center">
        <p className="text-center">Conhecimento Jurídico, Lógica de Programação, Experiências diversas em TI, Probo e Resiliente</p>
        <p className="text-center">Inglês: Intermediário, Espanhol: Intermediário</p>
      </div>
      </div>
    </div>
  );
}
