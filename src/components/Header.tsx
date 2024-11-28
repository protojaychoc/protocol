"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import LogoProtocol from "../../public/logo_protocol.png";
import {useMenuDesktop} from '../contexts/MenuDesktopContext';
import { usePathname } from 'next/navigation'


export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { toggleMenu } = useMenuDesktop();
    const pathname = usePathname()
    const [isExpanded, setIsExpdanded] = useState([false, false]);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY > lastScrollY) {
            setShowHeader(false);
        }else{
            setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [lastScrollY]);

    const handleChange = (index: number) => {
        toggleMenu;
        setIsExpdanded((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };


  return (
    <>
        <header className={`fixed top-0 z-50 bg-background w-full transition ease-in-out delay-00 ${showHeader ? "translate-y-0" : `-translate-y-[var(--header-height)]`}`}>
            <div className="block mx-auto max-w-theme-wide desktop:px-52 px-6">
                <nav className={`h-[var(--header-height)] flex justify-between items-center text-gray-500`}>
                    <ul className="flex justifiy-center items-center gap-6 desktop:gap-16">
                        <li>
                            <Link href="/" className="py-2 px-4">
                                <Image src={LogoProtocol} alt="Logo Protocol S.A." className="max-w-[200px] w-[80%] min-w-[120px]"></Image>
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
                        <li className={`relative group ${pathname == "/solutions/support" ? "text-black" : ""}`}>
                            <button 
                                onClick={() => handleChange(0)}
                                className="block py-2 px-4 transition"
                            >
                                Solutions
                            </button>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-7
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out  
                                ${isExpanded ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}                
                            ></span>
                        </li>
                        <li className={`relative group ${pathname == "/entreprise" ? "text-black" : ""}`}>
                            <button 
                                onClick={() => handleChange(1)}
                                className="py-2 px-4 transition"
                            >
                                L'entreprise
                            </button>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-7
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out
                                ${isExpanded ? "w-[40px]" : "w-0"}
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
            <span className={`absolute top-[var(--header-height)] right-0 left-0 border-b-[1px] border-b-gray-100 w-full`}></span>
        </header>
       
    </>
  );
};
