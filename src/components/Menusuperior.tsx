import Link from "next/link";
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

export default function Menusuperior() {
    return (
        <div className="flex items-center justify-between p-6 bg-dark-gray text-light-gray">
            {/* Seção de Ícones */}
            <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/yuri-rangel-978b70228" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin className="text-light-gray hover:text-blue-500 transition-colors duration-300" size={24} />
                </Link>
                <Link href="https://github.com/Yuri-Rangel-Rabelo-Palheta" target="_blank" aria-label="GitHub">
                    <FaGithub className="text-light-gray hover:text-blue-500 transition-colors duration-300" size={24} />
                </Link>
                <Link href="/CurriculoYuriPalheta.pdf" target="_blank" download aria-label="Download CV">
                    <FaDownload className="text-light-gray hover:text-green-500 transition-colors duration-300" size={24} />
                </Link>
            </div>

            {/* Seção de Links de Navegação */}
            <div className="flex space-x-6 text-xl font-bold">
                <Link href="/" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Home</Link>
                <Link href="/sobre" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Sobre</Link>
                <Link href="/projetos" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Projetos</Link>
                <Link href="/cursos" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Cursos</Link>
                <Link href="/trabalhos" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Trabalhos</Link>
                <Link href="/contato" className="hover:text-blue-500 transition-colors duration-300 text-indigo-400">Contato</Link>
            </div>
        </div>
    );
}
