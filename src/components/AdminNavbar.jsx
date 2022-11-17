import { FaUserCircle } from "react-icons/fa";

export default function AdminNavbar(){
    return (
        <div>
        <nav className="border-gray-200 bg-[#011f4b]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-16 py-2.5">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Power Grade</span>
                    </a>
                    <div className="flex items-center text-white">
                        <FaUserCircle className="text-4xl" />
                    </div>
                </div>
            </nav>
    </div>
    )
}