import Image from 'next/image';

export default function Cursos() {
  return (
    <div className="p-6 bg-dark-blue text-light-gray text-gray-200">
      {/* Seção de Formação Acadêmica */}
      <h1 className="text-3xl font-bold mb-6 text-center">Formação Acadêmica</h1>

      {/* Container para o Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Curso 1 */}
        <div className="border border-light-gray p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Image
              src="/ufpa-logo.png"
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
              src="/cesupa-logo.png"
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
              src="/ufpa-logo.png"
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
      </div>

      {/* Seção de Cursos */}
      <div className="flex flex-col items-center p-4 rounded-lg">
        <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Cursos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Lista de Certificados */}
        {[
          {
            logo: "/udemy-logo.png",
            title: "GESTÃO DE CONTAINERS COM DOCKER (EAD)",
            issuedDate: "jun de 2023",
            credentialCode: "CDC-EAD-0545-23",
            skills: "Resposta a incidentes · Aplicativos web · Privacidade dos dados"
          },
          {
            logo: "/udemy-logo.png",
            title: "Curso de Python",
            issuedDate: "dez de 2021",
            credentialCode: "UC-Obf7cae1-4a04-4f3e-9a5b-56bffeOfffd2",
            skills: "Teste de penetração · Python"
          },
          {
            logo: "/udemy-logo.png",
            title: "Hacker Ético Profissional com Kali Linux",
            issuedDate: "dez de 2021",
            credentialCode: "UC-96500d04-eb3f-48f4-bbf3-63db0135994f",
            skills: "Teste de penetração · Segurança · Resposta a incidentes · Aplicativos web · Segurança de rede · Python · Redes de computadores · Linux · Banco de dados · Sistemas operacionais · Segurança da informação"
          },
          {
            logo: "/udemy-logo.png",
            title: "O curso completo de banco de dados e SQL, sem mistérios!",
            issuedDate: "jun de 2021",
            credentialCode: "UC-608870e1-74f2-425c-814e-fb703d6c04e0",
            skills: "Teste de penetração · Resposta a incidentes · Aplicativos web · Avaliação de vulnerabilidades · SQL · Banco de dados · Segurança da informação"
          },
          {
            logo: "/esr.png",
            title: "TESTE DE INVASÃO DE APLICAÇÕES WEB (EAD)",
            issuedDate: "jun de 2021",
            credentialCode: "cdc-ead-0366-21",
            skills: "Teste de penetração · Segurança · Resposta a incidentes · Aplicativos web · Avaliação de vulnerabilidades · Segurança de rede · Python · Redes de computadores · SQL · Linux · Banco de dados · Sistemas operacionais · Segurança da informação"
          },
          {
            logo: "/enap-logo.png",
            title: "Análise de Dados em Linguagem R",
            issuedDate: "out de 2020",
            credentialCode: "Amuu3818640F9xs",
            skills: "Teste de penetração · Habilidades analíticas · Avaliação de vulnerabilidades · Banco de dados · Segurança da informação"
          },
          {
            logo: "/enap-logo.png",
            title: "Learning with Python",
            issuedDate: "out de 2020",
            credentialCode: "EcSy3818655s8ol",
            skills: "Teste de penetração · Avaliação de vulnerabilidades · Python"
          },
          {
            logo: "/enap-logo.png",
            title: "eMAG Desenvolvedor",
            issuedDate: "mai de 2020",
            credentialCode: "iMn23066029O9zy",
            skills: "Teste de penetração · Privacidade dos dados · Segurança da informação"
          },
          {
            logo: "/udemy-logo.png",
            title: "Fundamentos de Ethical Hacking: curso prático",
            issuedDate: "jul de 2019",
            credentialCode: "UC-CBT32S4Y",
            skills: "Teste de penetração · Segurança · Resposta a incidentes · Aplicativos web · Avaliação de vulnerabilidades · Segurança de rede · Python · Redes de computadores · SQL · Linux · Banco de dados · Sistemas operacionais · Segurança da informação"
          },
          {
            logo: "/esr.png",
            title: "Introdução à Segurança de Redes",
            issuedDate: "jun de 2019",
            credentialCode: "CDC-BEL-0044-19",
            skills: "Teste de penetração · Segurança · Resposta a incidentes · Aplicativos web · Avaliação de vulnerabilidades · Segurança de rede · Redes de computadores · SQL · Linux · Banco de dados · Sistemas operacionais · Segurança da informação"
          },
          {
            logo: "/enap-logo.png",
            title: "eMAG Conteudista",
            issuedDate: "dez de 2018",
            credentialCode: "xR3o397963oHw8",
            skills: "Teste de penetração · Privacidade dos dados · Segurança da informação"
          },
          {
            logo: "/esr.png",
            title: "Arquitetura e Protocolos de Rede TCP-IP",
            issuedDate: "mai de 2018",
            credentialCode: "CDC-BEL-0022-18",
            skills: "Teste de penetração · Avaliação de vulnerabilidades · Segurança de rede · Redes de computadores · Sistemas operacionais · Segurança da informação"
          }
        ].map((course, index) => (
          <div key={index} className="border border-light-gray p-4 rounded-lg flex flex-wrap mb-4">
            <div className="flex items-center mb-4">
              <Image
                src={course.logo}
                alt={course.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                
              </div>
            </div>
            
          </div>
        ))}

        </div>
        
      </div>

      {/* Seção de Habilidades */}
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Habilidades</h1>
        <div className="border border-light-gray p-4 rounded-lg w-1/4 items-center">
          <p className="text-center">Conhecimento Jurídico, Lógica de Programação, Experiências diversas em TI, Probo e Resiliente</p>
          <p className="text-center">Inglês: Intermediário, Espanhol: Intermediário </p>

        </div>
      </div>
    </div>
  );
}

