import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header(){
    const [navToggle, setNavToggle] = useState(true);

    return (
        <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap justify-between items-center p-5 flex-row md:flex-row md:items-center">
                <div className="flex title-font font-medium items-center text-gray-900">
                <svg className="hover:rotate-[359deg] transition-transform duration-[1500ms]" width="27" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1464 1.24L11.1464 0.919998C12.0531 0.919998 12.5064 2.12 12.5064 4.52L13.7464 13.76L13.9064 13.92L18.5064 12.24C19.1197 12.24 19.4531 12.7067 19.5064 13.64C19.5064 14.3333 17.8131 15.1733 14.4264 16.16L14.2664 16.24V16.4C14.2664 16.96 15.1464 19.88 16.9064 25.16V25.24C16.9064 25.7467 16.4931 26.1733 15.6664 26.52C14.8931 26.52 14.3864 25.6 14.1464 23.76C13.5331 22.4267 12.7864 20.2267 11.9064 17.16H11.7464C8.25307 17.88 6.50641 18.4933 6.50641 19C4.58641 23.16 3.13307 25.24 2.14641 25.24C1.58641 25.24 1.25307 24.88 1.14641 24.16C1.14641 23.52 1.85307 22.2667 3.26641 20.4L3.90641 19H2.90641L2.14641 19.16C1.15974 18.92 0.666406 18.4133 0.666406 17.64C1.06641 16.7067 1.65307 16.24 2.42641 16.24L3.42641 16.64C4.91974 16.64 5.66641 16.0933 5.66641 15C7.02641 11.8 8.51974 7.21333 10.1464 1.24ZM10.5064 8.52L8.14641 15.64C10.3331 15.2133 11.4264 14.8 11.4264 14.4C11.0264 10.48 10.7197 8.52 10.5064 8.52Z" fill="#7689DE"/>
                </svg>

                </div>
                <nav className={`animate-background md:animate-none ${navToggle?'hidden':''} w-full md:w-auto h-[100vh] md:h-auto text-2xl text-center md:text-base md:text-left absolute md:relative top-[50%] md:top-0 left-[50%] md:left-0 -translate-y-[50%] md:transform-none -translate-x-[50%] md:ml-auto flex md:flex flex-col md:flex-row md:flex-wrap md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8`}>
                    <a className="block hover:text-[#7689de]" href="/" onClick={(e)=>{setNavToggle(true)}}>Home</a>
                    <a className="block hover:text-[#7689de]" href="/projects" onClick={(e)=>{setNavToggle(true)}}>Project</a>
                    <a className="block hover:text-[#7689de]" href="#top" onClick={(e)=>{setNavToggle(true)}}>Contact</a>
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