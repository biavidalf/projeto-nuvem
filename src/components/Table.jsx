import React, { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemoveR } from "react-icons/cg";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = () => {
    toast.success('Deletado com sucesso!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export default function Table({ persons, type, getData }) {
    useEffect(() => {
        renderPage()
        console.log('type: ' + type)
    }, [type])

    const renderPage = () => {
        if(type == 'aluno' || type == 'professor'){
            return (   
                <>
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="overflow-x-auto w-full">
                        <div className="flex justify-between py-3 px-2">
                            <div className="relative max-w-xs">
                                <label htmlFor="hs-table-search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white text-black placeholder:text-slate-600"
                                    placeholder="Search..."
                                    />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                        className="h-3.5 w-3.5 text-slate-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
        
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                        <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3 h-3"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                        />
                                                </svg>
                                            </div>
                                            <div className="hidden sm:block">
                                                Filters
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
        
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
                                        {persons.map((person, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm font-medium text-blue whitespace-nowrap">
                                                        {person.matricula}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                                        {person.nome}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                                        {person.email}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button 
                                                            onClick={showToast}
                                                            className="text-green-500 hover:text-green-700 text-2xl float-left"
                                                            >
                                                            <BiEdit />
                                                        </button>
                                                            
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button     
                                                            className="text-red-500 hover:text-red-700 text-xl float-left"
                                                            onClick={() => {
                                                                axios
                                                                .delete(`http://https://backend-server-nuvem.vercel.app/${type}/${person.matricula}`)
                                                                .then((response) => {
                                                                  getData();
                                                                  showToast();
                                                                })
                                                                .catch((error) => console.error(`Error: ${error}`));
        
                                                            }}
                                                        >
                                                            <CgRemoveR />
                                                            
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                </>
            );
        }else if(type == 'turma' && (!persons || persons[0]?.disciplina)){
            return (   
                <>
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="overflow-x-auto w-full">
                        <div className="flex justify-between py-3 px-2">
                            <div className="relative max-w-xs">
                                <label htmlFor="hs-table-search" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white text-black placeholder:text-slate-600"
                                    placeholder="Search..."
                                    />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                        className="h-3.5 w-3.5 text-slate-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
        
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                                        <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3 h-3"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                        />
                                                </svg>
                                            </div>
                                            <div className="hidden sm:block">
                                                Filters
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
        
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
                                                Disciplina
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-md font-semibold text-left text-gray-500 uppercase "
                                                >
                                                Professor
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
                                        {
                                        persons.map((person, index) => {
                                            console.log(person.disciplina)
                                            return(
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-sm font-medium text-blue whitespace-nowrap">
                                                        {person.codigo}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                                        {person.disciplina.nome}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue whitespace-nowrap">
                                                        {person.professor.nome}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button 
                                                            onClick={showToast}
                                                            className="text-green-500 hover:text-green-700 text-2xl float-left"
                                                            >
                                                            <BiEdit />
                                                        </button>
                                                            
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button     
                                                            className="text-red-500 hover:text-red-700 text-xl float-left"
                                                            onClick={() => {
                                                                axios
                                                                .delete(`http://https://backend-server-nuvem.vercel.app/${type}/${person.codigo}`)
                                                                .then((response) => {
                                                                  getData();
                                                                  showToast();
                                                                })
                                                                .catch((error) => console.error(`Error: ${error}`));
        
                                                            }}
                                                        >
                                                            <CgRemoveR />
                                                            
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                </>
            );
        }
    }
    return(
        persons &&
        renderPage()
    )
    
}
