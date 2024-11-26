import Link from "next/link";
import Image from "next/image";
import LogoProtocol from "../../public/logo_protocol.png";


export const Header = () => {
  return (
    <>
        <header className="block mx-auto max-w-theme-wide px-52">
            <nav className="h-24 flex justify-between items-center text-gray-500">
                <ul className="flex justifiy-center items-center gap-16">
                    <li>
                        <Link href="/" className="py-2 px-4 transition hover:text-primary active:text-black active:font-medium">
                            <Image src={LogoProtocol} alt="Logo Protocol S.A." className="max-w-[200px]"></Image>
                        </Link>
                    </li>
                    <li className="relative">
                        <Link href="/" className="py-4 px-4 transition hover:text-primary active:text-black active:font-medium font-medium text-black">Accueil</Link>
                        <span className="absolute -bottom-9 l-0 block h-1 w-full bg-primary rounded-sm"></span>
                    </li>
                    <li><Link href=""  className="py-2 px-4 transition hover:text-primary active:text-black active:font-medium">Solutions</Link></li>
                    <li><Link href=""  className="py-2 px-4 transition hover:text-primary active:text-black active:font-medium">L'entreprise</Link></li>
                    <li><Link href=""  className="py-2 px-4 transition hover:text-primary active:text-black active:font-medium">Contact</Link></li>
                </ul>
                <Link href="/" className="group"><button className="border rounded-sm px-4 py-2 transition group-hover:bg-blue-500 group-hover:text-white group-active:text-secondary">Support 24/7</button></Link>
            </nav>
        </header>
        <div className="border-b-[1px] w-full border-b-gray-100"></div>
    </>
  );
};
