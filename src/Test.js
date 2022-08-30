import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Test(){
    return (
        <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap justify-between items-center p-5 flex-row md:flex-row md:items-center">
                <a className="flex title-font font-medium items-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </a>
                <nav className="hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
                    <a className="hover:text-gray-900">Home</a>
                    <a className="hover:text-gray-900">Work</a>
                    <a className="hover:text-gray-900">Project</a>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                </button> */}
                <FontAwesomeIcon icon={faBars} size="2xl" className="block md:hidden"/>
            </div>
        </header>
        </>
    );
}

export default Test;