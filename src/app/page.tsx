import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-dark-blue text-light-gray ">
      
      {/* Imagem no topo */}
      <div className="flex justify-center mb-6">
          <Image 
            src="/sobreImg.png" // Substitua pelo caminho da sua imagem
            alt="Yuri Rangel"
            width={200} 
            height={200}
            className="rounded-full"
          />
        </div>
      
      {/* Caixa com borda em torno do conteúdo */}
      <div className="max-w-3xl p-6 border border-indigo-600 rounded-lg">
        
        
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-400">Eng. Computação - Yuri Rangel</h1>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-200">Perito Computacional, Especialista em Computação Forense. Mestrando em Computação Aplicada</h2>
        
        <div className="space-y-4 text-justify">
          <p className="text-center text-blue-100">
            Mais de dez anos de experiência, com foco nas áreas de segurança, desenvolvimento e redes.
          </p>
          <p className="text-center text-indigo-100">
           CREA 152267261-3.
          </p>
        </div>
      </div>
    </div>
  );
}
