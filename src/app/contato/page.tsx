//import EmailForm from "@/components/EmailForm"
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-dark-blue text-light-gray">
            <h1 className="text-3xl font-bold mb-8">Contato</h1>
            <p className="mb-4 text-center">
                Entre em contato comigo enviando um e-mail ou por whatsapp:
            </p>
            
            <p>yuripalhetaengcomp@gmail.com</p>

            <form 
                action="mailto:yuripalhetaengcomp@gmail.com" 
                method="POST" 
                encType="multipart/form-data" 
                className="w-full max-w-md bg-indigo-700 p-6 rounded-lg shadow-md"
                >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-dark-gray">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-dark-gray">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-dark-gray">Mensagem:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
                >
                    Enviar Mensagem
                </button>
            </form>

            {/* Seção de Botões */}
            <div className="flex space-x-6 mt-8">
                {/* Botão para Conversar no WhatsApp */}
                <a 
                    href="https://wa.me/5591992436262" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Conversar no WhatsApp
                </a>
            </div>
        </div>
    )
}

/*

{/* Formulário de Contato *//*}
<form 
action="mailto:yuripalhetaengcomp@gmail.com" 
method="POST" 
encType="multipart/form-data" 
className="w-full max-w-md bg-indigo-700 p-6 rounded-lg shadow-md"
>
<div className="mb-4">
    <label htmlFor="name" className="block text-sm font-bold mb-2 text-dark-gray">Nome:</label>
    <input 
        type="text" 
        id="name" 
        name="name" 
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
    />
</div>
<div className="mb-4">
    <label htmlFor="email" className="block text-sm font-bold mb-2 text-dark-gray">E-mail:</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
    />
</div>
<div className="mb-4">
    <label htmlFor="message" className="block text-sm font-bold mb-2 text-dark-gray">Mensagem:</label>
    <textarea 
        id="message" 
        name="message" 
        rows={4} 
        className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
    />
</div>
<button 
    type="submit" 
    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
>
    Enviar Mensagem
</button>
</form>

*/




/* export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-dark-blue text-light-gray">
            <h1 className="text-3xl font-bold mb-8">Contato</h1>
            <p className="mb-4 text-center">
                Entre em contato comigo através dos canais abaixo:
            </p>
            <div className="flex space-x-6">
                {/* Botão para Enviar E-mail */ /*}
                <a 
                    href="mailto:yuripalhetaengcomp@gmail.com" 
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
                >
                    Enviar E-mail
                </a>
                {/* Botão para Conversar no WhatsApp */ /*}
                <a 
                    href="https://wa.me/5591992436262" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Conversar no WhatsApp
                </a>
            </div>
        </div>
    )
} */
