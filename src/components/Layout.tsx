"use client"

import Menusuperior from "./Menusuperior";
import Navbar from "./Navbar";
import Rodape from "./Rodape";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-dark-blue text-light-gray">
            <Menusuperior />
            <main className="flex-grow p-4 bg-gradient-to-b from-black to-dark-gray shadow-lg">
                {children}
            </main>
            
            <Rodape />
        </div>
    );
}


/* "use client"

import Menusuperior from "./Menusuperior";
import Navbar from "./Navbar";
import Rodape from "./Rodape";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <Menusuperior />
                <main>  
                    {children}
                </main>
                <Navbar />
                <Rodape />
            </div>
        </>
    );
} */