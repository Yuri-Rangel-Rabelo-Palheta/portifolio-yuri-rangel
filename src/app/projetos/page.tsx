import Image from 'next/image';
import Link from 'next/link';

export default function Projetos() {
    return (
        <div className="p-6 bg-dark-blue text-light-gray text-gray-200">
            {/* Seção de Projetos de Programação */}
            <h1 className="text-3xl font-bold mb-6 text-center">Projetos de Programação</h1>

            {/* Container para o Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Curso 1 */}
                <Link href="/contato">
                <div className="border border-light-gray p-4 rounded-lg flex flex-col">
                    <div className="flex items-center mb-4">
                    
                        <Image
                            src="/hacker-branco.png"
                            alt="Web Scraper"
                            width={80}
                            height={80}
                            className="mb-4"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">Web Scraper</h2>
                            <p>Coleta dados de sites.</p>
                            <p>Retorna um csv com os dados.</p>
                        </div>
                        
                    </div>
                </div>
                </Link>

                {/* Curso 2 */}
                <Link href="/contato">
                <div className="border border-light-gray p-4 rounded-lg flex flex-col">
                    <div className="flex items-center mb-4">
                    
                        <Image
                            src="/next.svg"
                            alt="Portfolio EngComp"
                            width={80}
                            height={80}
                            className="mb-4"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">Portfolio EngComp</h2>
                            <p>Portfólio para um Engenheiro da Computação.</p>
                            <p>Mostrar o que faz, como faz e para quem faz.</p>
                        </div>
                        
                    </div>
                </div>
                </Link>

                {/* Curso 2 */}
                <Link href="/contato">
                <div className="border border-light-gray p-4 rounded-lg flex flex-col">
                
                    <div className="flex items-center mb-4">
                    
                        <Image
                            src="/next.svg"
                            alt="Portfolio EngComp"
                            width={80}
                            height={80}
                            className="mb-4"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-semibold">Portfolio Ilustrador</h2>
                            <p>Portfólio para um ilustrador.</p>
                            <p>Mostrar o que faz, como faz e para quem faz.</p>
                        </div>
                        
                    </div>
                    
                </div>
                </Link>

                {/* Curso 3 
                <Link href="/contato">
                <div className="border border-light-gray p-4 rounded-lg flex flex-col">
                    <div className="flex items-center mb-4">
                        
                        <Image
                            src="/icons8-python-96.png"
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
                </Link>*/}
            </div>

            

            {/* Seção de Habilidades

        <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Habilidades</h1>
        <div className="border border-light-gray p-4 rounded-lg w-1/4 items-center">
          <p className="text-center">Conhecimento Jurídico, Lógica de Programação, Experiências diversas em TI, Probo e Resiliente</p>
          <p className="text-center">Inglês: Intermediário, Espanhol: Intermediário </p>

        </div>
      </div>

      */}

        </div>
    );
}
