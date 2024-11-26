import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/solid'


export const MenuDesktop = () => {
    return (
        <div className="bg-black/50 absolute z-10 top-24 right-0 left-0 bottom-0">
            <nav className="m-4 bg-background grid grid-flow-col grid-cols-[auto_40%] rounded-xl overflow-hidden">
                <ul className="p-8 ml-[20%]">
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Service Cloud</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Pack all-inclusive</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Service de support</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Service de sécurité</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Service de maintenance</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Gouvernance & Conseils</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Conduite de projet IT</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Audit de sécurité</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Formation de sécurité IT</Link>
                    </li>
                    <li className="group border-b-[1px] border-b-secondary">
                        <Link href="" className="block text-3xl py-4 group-hover:text-primary transition">Protection Sinistre</Link>
                    </li>
                </ul>
                <ul className="bg-card p-8">
                    <li>
                        <Link href="" className="flex group bg-background justify-between items-start flex-col p-8 m-4 rounded-xl min-h-52 max-w-[420px]">
                            <div>
                                <h5 className="text-2xl font-medium">Notre téléphone</h5>
                                <h6 className="text-lg mt-4">Composez-le: 021 623 77 77</h6>
                            </div>
                            <button className="text-lg text-primary transition group-hover:text-black">Contact  <ChevronRightIcon className="h-5 w-5 text-primary transition group-hover:text-black inline ml-4" /></button>
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="flex group bg-background justify-between items-start flex-col p-8 m-4 rounded-xl min-h-52 max-w-[420px]">
                            <div>
                                <h5 className="text-2xl font-medium">Ouvrir un ticket</h5>
                                <h6 className="text-lg mt-4">Permettre à vos collaborateurs de suivre leurs incidents et problèmes</h6>
                            </div>
                            <button className="text-lg text-primary transition group-hover:text-black">Ticketing  <ChevronRightIcon className="h-5 w-5 text-primary transition group-hover:text-black inline ml-4" /></button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}