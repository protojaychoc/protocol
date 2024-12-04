"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import LogoProtocol from "../../public/logo_protocol.png";
import {useMenu} from '../contexts/MenuContext';
import { usePathname } from 'next/navigation';


export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [showBackgroundHeader, setShowBackgroundHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const { toggleMenu, activeMenu } = useMenu();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const handleScroll = () => {
        let currentScrollY = window.scrollY;

        if(currentScrollY > lastScrollY) {
            setShowHeader(false);
        }else{
            setShowHeader(true);
        }

        if (currentScrollY === 0) {
            setShowBackgroundHeader(false);
        } else {
            setShowBackgroundHeader(true);
        }

        setLastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [lastScrollY]);

  return (
    <>
        <header className={`fixed top-0 right-0 left-0 z-50 ${showBackgroundHeader ? 'bg-background' : ''} lg:bg-background w-full transition ease-in-out delay-300 ${showHeader || activeMenu ? "translate-y-0" : `-translate-y-[var(--header-height)]`}`}>
            <div className="hidden lg:block mx-auto max-w-theme-wide desktop:px-52 px-6">
                <nav className={`h-[var(--header-height)] flex justify-between items-center text-gray-500`}>
                    <ul className="flex justifiy-center items-center gap-6 desktop:gap-16">
                        <li>
                            <Link href="/" className="py-2 px-4">
                                <Image src={LogoProtocol} alt="Logo Protocol S.A." width={200} height={100} priority className="max-w-[200px] w-[80%] min-w-[120px]"></Image>
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link 
                                href="/" 
                                className={`py-4 px-4 transition font-medium ${pathname == "/" ? "text-black" : ""}`}

                            >
                                Accueil
                            </Link>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-9
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out  
                                ${pathname == "/" ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}             
                            ></span>
                        </li>
                        <li className={`relative group ${pathname.startsWith("/solutions") ? "text-black" : ""}`}>
                            <button 
                                onClick={() => toggleMenu("solutions")}
                                className={`py-2 px-4 transition`}
                            >
                                Solutions
                            </button>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-7
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out  
                                ${activeMenu === "solutions" ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}                
                            ></span>
                        </li>
                        <li className={`relative group ${pathname.startsWith("/entreprise") ? "text-black" : ""}`}>
                            <button 
                                onClick={() => toggleMenu("entreprise")}
                                className={`py-2 px-4 transition`}
                            >
                                L'entreprise
                            </button>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-7
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out
                                ${activeMenu === "entreprise" ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}                
                            ></span>
                        </li>
                        <li className={`relative group ${pathname == "/contact" ? "text-black" : ""}`}>
                            <Link href="/contact" className="py-2 px-4 transition ">
                                Contact
                            </Link>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-9
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out  
                                ${pathname == "/contact" ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}                
                            ></span>
                        </li>
                    </ul>
                    <Link href="/" className="group">
                        <button className="border rounded-sm px-4 py-2 transition group-hover:bg-blue-500 group-hover:text-white group-active:text-secondary">
                            Support 24/7
                        </button>
                    </Link>
                </nav>
            </div>
            <nav className={`relative flex justify-between items-center w-screen lg:hidden h-[var(--header-height)]`}>
                    <Link href="/" className="py-2 pl-2">
                        <Image src={LogoProtocol} alt="Logo Protocol S.A." width={200} height={100} priority className="max-w-[200px] w-[80%] min-w-[120px]"></Image>
                    </Link>
                   
                    <div className="inline-block cursor-pointer bg-card p-1 mr-2 rounded-sm transform transition-all ease-in-out duration-500" onClick={() => setIsOpen(!isOpen)}>
                        <button
                            className="flex justify-center items-center"
                            aria-label="Toggle menu"
                            >
                                <span className={`inline-block mr-2 ${isOpen ? 'hidden' : ''}`}>Menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`inline-block w-8 h-8 transform transition-transform duration-300 ${
                                isOpen ? 'rotate-90' : ''
                                }`}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={`${
                                    isOpen
                                    ? 'M6 6L18 18M18 6L6 18' // Croix
                                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' // Hamburger
                                }`}
                                />
                            </svg>
                        </button>
                    </div>      
                </nav>
            <span className={`absolute top-[var(--header-height)] right-0 left-0 border-b-[1px] border-b-gray-100 w-full hidden lg:block`}></span>
        </header>
       
    </>
  );
};
