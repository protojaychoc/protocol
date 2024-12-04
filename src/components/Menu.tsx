"use client";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {useMenu} from '../contexts/MenuContext';

export const Menu = () => {
    const { removeMenu, activeMenu } = useMenu();

    if (!activeMenu) return null

    const handleCloseMenu = () => {
        removeMenu();
    }

    return (
        <div className={`bg-black/50 fixed z-10 top-24 right-0 left-0 bottom-0 ${activeMenu ? "block" : "hidden"}`}>
            <nav className="relative m-4 bg-background grid grid-flow-col grid-cols-[auto_40%] rounded-xl overflow-hidden">
                {activeMenu === "solutions" && (
                    <ul className="p-8 ml-[20%]">
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/service-cloud" className="block text-3xl py-4 group-hover:text-primary transition">Service Cloud</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/pack-all-inclusive" className="block text-3xl py-4 group-hover:text-primary transition">Pack all-inclusive</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/support" className="block text-3xl py-4 group-hover:text-primary transition">Service de support</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/service-securite" className="block text-3xl py-4 group-hover:text-primary transition">Service de sécurité</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/service-maintenance" className="block text-3xl py-4 group-hover:text-primary transition">Service de maintenance</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/gouvernance-conseils" className="block text-3xl py-4 group-hover:text-primary transition">Gouvernance & Conseils</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/conduite-projet-it" className="block text-3xl py-4 group-hover:text-primary transition">Conduite de projet IT</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/audi-securite" className="block text-3xl py-4 group-hover:text-primary transition">Audit de sécurité</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/formation-securite" className="block text-3xl py-4 group-hover:text-primary transition">Formation de sécurité IT</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/solutions/protection-sinistre" className="block text-3xl py-4 group-hover:text-primary transition">Protection Sinistre</Link>
                        </li>
                    </ul>
                )}

                {activeMenu === "entreprise" && (
                    <ul className="p-8 ml-[20%]">
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="" className="block text-3xl py-4 group-hover:text-primary transition">A propos</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/entreprise/partenairs" className="block text-3xl py-4 group-hover:text-primary transition">Nos partenaires</Link>
                        </li>
                        <li className="group border-b-[1px] border-b-secondary">
                            <Link onClick={handleCloseMenu} href="/entreprise/secteurs-activites" className="block text-3xl py-4 group-hover:text-primary transition">Les secteurs d'activités</Link>
                        </li>
                    </ul>
                )}
                
                <ul className="bg-card py-20 px-8 flex justify-center align-center flex-col">
                    <li>
                        <Link onClick={handleCloseMenu} href="" className="flex group bg-background justify-between items-start flex-col p-8 m-4 rounded-xl min-h-52 max-w-[420px]">
                            <div>
                                <h5 className="text-2xl font-medium">Notre téléphone</h5>
                                <h6 className="text-lg mt-4">Composez-le: 021 623 77 77</h6>
                            </div>
                            <button className="text-lg text-primary transition group-hover:text-black">Contact  <ChevronRightIcon className="h-5 w-5 text-primary transition group-hover:text-black inline ml-4" /></button>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleCloseMenu} href="" className="flex group bg-background justify-between items-start flex-col p-8 m-4 rounded-xl min-h-52 max-w-[420px]">
                            <div>
                                <h5 className="text-2xl font-medium">Ouvrir un ticket</h5>
                                <h6 className="text-lg mt-4">Permettre à vos collaborateurs de suivre leurs incidents et problèmes</h6>
                            </div>
                            <button className="text-lg text-primary transition group-hover:text-black">Ticketing  <ChevronRightIcon className="h-5 w-5 text-primary transition group-hover:text-black inline ml-4" /></button>
                        </Link>
                    </li>
                </ul>
                <button className="absolute top-4 right-4 bg-background rounded-full w-10 h-10" onClick={() => removeMenu()}>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] block size-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </button>
            </nav>
        </div>
    );
}