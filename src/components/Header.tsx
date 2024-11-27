"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import LogoProtocol from "../../public/logo_protocol.png";
import {useMenuDesktop} from '../contexts/MenuDesktopContext';
import { usePathname } from 'next/navigation'


export const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { toggleMenu, menuOpen } = useMenuDesktop();
    const pathname = usePathname()

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

    console.log(pathname);

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
                        <li className="relative">
                            <Link href="/" className={`py-4 px-4 transition font-medium ${pathname == "/" ? "text-black" : ""}`}>
                                Accueil
                            </Link>
                            <span className="absolute -bottom-9 left-[50%] translate-x-[-50%] block h-[3px] w-[40px] bg-gray-200 rounded-sm group"></span>
                        </li>
                        <li className={`relative group ${pathname == "/solutions/support" ? "text-black" : ""}`}>
                            <button onClick={toggleMenu} className="block py-2 px-4 transition">
                                Solutions
                            </button>
                            <span className={`
                                absolute left-[50%] translate-x-[-50%] -bottom-7
                                block h-[3px] bg-gray-200 rounded-sm
                                transition-all duration-300 ease-in-out                                
                                ${menuOpen ? "w-[40px]" : "w-0"}
                                group-hover:w-[40px]
                            `}                
                            ></span>
                        </li>
                        <li className={`relative ${menuOpen ? "group" : ""}`}>
                            <button onClick={toggleMenu} className="py-2 px-4 transition hover:text-primary">
                                L'entreprise
                            </button>
                        </li>
                        <li className={`relative ${menuOpen ? "group" : ""}`}>
                            <Link href=""  className="py-2 px-4 transition hover:text-primary ">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="/" className="group"><button className="border rounded-sm px-4 py-2 transition group-hover:bg-blue-500 group-hover:text-white group-active:text-secondary">Support 24/7</button></Link>
                </nav>
            </div>
            <span className={`absolute top-[var(--header-height)] right-0 left-0 border-b-[1px] border-b-gray-100 w-full`}></span>
        </header>
       
    </>
  );
};
