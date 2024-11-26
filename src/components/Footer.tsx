import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-card text-card-foreground px-10 m-10 rounded-xl">
            <div className="block mx-auto max-w-theme-wide p-10">
                <div className="grid grid-cols-[40%_auto] gap-20">
                    <div>
                        <div className="flex">
                            <div className="flex-1">
                                <h4 className="font-bold">PROTOCOL S.A.</h4>
                                <ul className="my-2">
                                    <li className="my-2">Rue de Sébeillon 9b</li>
                                    <li className="my-2">1004 Lausanne</li>
                                </ul>                                
                            </div>
                            <div className="flex-1">                            
                                <h4 className="font-bold">Heures d'ouverture des bureaux</h4>
                                <ul className="my-2">
                                    <li className="my-2">8h30 - 12h30 et 13h30 - 17h30</li>
                                </ul>                                                             
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <div className="flex-1">
                                <ul className="my-2">
                                    <li className="my-2"><a href="+41(0)216237777" className="p-1 hover:text-primary transition">+41 (0)21 623 77 77</a></li>
                                    <li className="my-2"><a href="info@protocol.ch" className="p-1 hover:text-primary transition">info@protocol.ch</a></li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold">​Pour contacter notre Centre de support</h4>
                                <ul className="my-2">
                                    <li className="my-2"><a href="support@protocol.ch" className="p-1 hover:text-primary transition">support@protocol.ch</a></li>
                                </ul>
                            </div>  
                        </div>                                    
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-5">
                            <div>
                                <h4 className="font-bold">Nos solutions</h4>
                                <nav>
                                    <ul className="my-2">
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Pack all-inclusive</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Services de support</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Service de maintenance</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Service de sécurité</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Service cloud</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Gouvernance & conseils</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Conduite de projet IT</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h4 className="font-bold">Sécurité</h4>
                                <nav>
                                    <ul className="my-2">
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Audit de sécurité</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Formation en sécurité</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h4 className="font-bold">A propos</h4>
                                <nav>
                                    <ul className="my-2">
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">L’entreprise</Link>
                                        </li>
                                        <li className="my-2">
                                            <Link href="" className="p-1 hover:text-primary transition">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </footer>
    );
}