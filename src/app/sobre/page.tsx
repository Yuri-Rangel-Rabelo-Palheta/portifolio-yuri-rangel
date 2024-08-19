import Image from 'next/image';
import img from '../../../public/sobreImg.png'
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex items-center justify-center  p-6 bg-dark-blue text-light-gray">
            {/* Parte 1: Imagem à esquerda */}
            <div className="mr-8">
                <Image 
                    src="/sobreImg.png" 
                    alt="Minha Foto" 
                    width={200} 
                    height={200} 
                    className="rounded-full"
                />
            </div>
            
            {/* Parte 2: Texto à direita com borda e alinhamento justificado */}
            <div className="max-w-3xl space-y-4 p-6 border border-light-gray rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-indigo-400">Sobre mim</h1>
                <p className="text-justify text-gray-200">
                    Sou Graduado em Engenharia da Computação pela UFPA, Especialista em Computação Forense pelo CESUPA 
                    e atualmente membro do CREA e mestrando em Computação Aplicada.
                </p>
                <p className="text-justify text-gray-200">
                    Trabalho com Tecnologia desde 2008, acumulando experiência em diversas áreas. 
                    Atualmente, sou Analista de Desenvolvimento na UFRA.
                </p>
                <p className="text-justify text-gray-200">
                    Como Engenheiro da Computação, possuo um arcabouço de conhecimento diverso e sofisticado, 
                    focando em Desenvolvimento com ênfase em Python, Java, e JavaScript. 
                    Tenho conhecimento avançado em Sistemas Linux e intermediário em Redes e Banco de Dados.
                </p>
                <p className="text-justify text-gray-200">
                    Como Especialista em Computação Forense, ofereço serviços como investigação criminal, 
                    consultoria para empresas, e perícia judicial, auxiliando na análise de evidências digitais, 
                    resposta a incidentes de segurança, e conformidade com regulamentações.
                </p>
                <p className="text-justify text-gray-200">
                    Possuo cursos voltados para ethical hacking, pentesting, e teste de invasão em aplicações web.
                </p>
                <p className="text-justify text-indigo-200">
                    <Link href="/contato" > Entre em contato para saber mais. </Link>
                    

                </p>
            </div>
        </div>
    );
}
