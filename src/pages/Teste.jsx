import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { CgRemoveR } from "react-icons/cg";

export default function Teste(databaseTable){
    const [alunos, setAlunos] = useState([]);

    const url = 'http://localhost:3000/aluno';
    
    useEffect(() => {
        getAlunos();
    }, []);
    
    const getAlunos = () => {
        axios.get(url)
        .then((response) => {
            const allAlunos = response.data;
            setAlunos(allAlunos);
            console.log(alunos);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    return (
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                            >
                                Edit
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                            >
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-blue">
                        {alunos.map((aluno, index) => {
                            console.log(aluno);
                            return(
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-blue whitespace-nowrap">
                                        {aluno.matricula}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                        {aluno.nome}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                        {aluno.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700 text-2xl"
                                            href="#"
                                        >
                                            <BiEdit />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700 text-xl"
                                            href="#"
                                        >
                                            <CgRemoveR />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}