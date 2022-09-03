import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header(){
    const [navToggle, setNavToggle] = useState(true);

    return (
        <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap justify-between items-center p-5 flex-row md:flex-row md:items-center">
                <a className="flex title-font font-medium items-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </a>
                <nav className={`bg-yellow-50 md:bg-transparent ${navToggle?'hidden':''} w-full md:w-auto h-[100vh] md:h-auto text-2xl text-center md:text-base md:text-left absolute md:relative top-[50%] md:top-0 left-[50%] md:left-0 -translate-y-[50%] md:transform-none -translate-x-[50%] md:ml-auto flex md:flex flex-col md:flex-row md:flex-wrap md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8`}>
                    <a className="block hover:text-gray-900">Home</a>
                    <a className="block hover:text-gray-900">Work</a>
                    <a className="block hover:text-gray-900">Project</a>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                </button> */}
                <FontAwesomeIcon icon={faBars} size="2xl" className="block z-50 md:hidden" onClick={(e)=>{setNavToggle(!navToggle)}}/>
            </div>
        </header>
        </>
    );
}

export default Header;