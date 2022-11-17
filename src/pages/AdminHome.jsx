import AdminNavbar from "../components/AdminNavbar";
import AdminSection from "./AdminSection";
import { useState } from "react";

export default function Admin(){
    const [pageName, setPageName] = useState('aluno');
    
    const renderPage = () => {
        return (<AdminSection type={pageName} url={`http://localhost:3000/${pageName}`} />)
    };

    const setAluno = () => {
        setPageName('aluno');
    };
    const setProfessor = () => {
        setPageName('professor');
    };
    const setTurma = () => {
        setPageName('turma');
    };
    const setHome = () => {
        setPageName('home');
    };

    return (
        <div>
            {/* Primary Navbar */}
            <AdminNavbar />

            {/* Secondary NavBar */}
            <nav className="bg-[#03396c]">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-16">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <button onClick={setHome} className="text-white hover:underline">Home</button>
                            </li>
                            <li>
                                <button onClick={setAluno} className="text-white hover:underline">Alunos</button>
                            </li>
                            <li>
                                <button onClick={setProfessor} className="text-white hover:underline">Professores</button>
                            </li>
                            <li>
                                <button onClick={setTurma} className="text-white hover:underline">Turmas</button>
                            </li>
                            <li>
                                <button className="text-white hover:underline">Cursos</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="h-screen bg-blue w-full pt-10">
                <div className="max-w-screen-md m-auto">
                    {renderPage()}

                </div>
            </main>
        </div>
    )
}