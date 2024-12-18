"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useMenu } from "../contexts/MenuContext";
import { usePathname } from "next/navigation";
import { CSSTransition } from "react-transition-group";
import "../styles/animation.css";

export const MenuMobile = () => {
  const { activeMenuDesktop, closeAllMenus, isDisplay, isVisible } = useMenu();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState();

  const handleNextMenu = () => {};

  return (
    <div
      className="fixed inset-0"
      style={{ display: isDisplay ? "block" : "none" }}
    >
      <div
        className={`absolute bg-black bg-opacity-50 z-9 inset-0 lg:hidden ${
          isVisible ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      ></div>
      <nav
        className={`absolute top-28 right-4 bottom-4 left-4 py-4 px-8 bg-background rounded-xl overflow-hidden 
            transition-transform duration-500 ${
              isVisible ? "animate-slideIn" : "animate-slideOut"
            }`}
      >
        <ul>
          {pathname !== "/" && (
            <li className="group border-b-[1px] border-b-secondary">
              <Link
                onClick={handleNextMenu}
                href="/"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Accueil
              </Link>
            </li>
          )}

          <li className="group border-b-[1px] border-b-secondary">
            <span
              onClick={handleNextMenu}
              className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
            >
              Solutions
            </span>
          </li>
          <li className="group border-b-[1px] border-b-secondary">
            <span
              onClick={handleNextMenu}
              className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
            >
              L'entreprise
            </span>
          </li>

          {pathname !== "/contact" && (
            <li className="group border-b-[1px] border-b-secondary">
              <span
                onClick={handleNextMenu}
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Contact
              </span>
            </li>
          )}
          <ul className="mt-8 md:mt-14 w-full">
            <li className="my-4">
              <a
                href=""
                className="text-md md:text-lg text-gray-600 py-2 md:py-4"
              >
                Formulaire de contact
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="text-md md:text-lg text-gray-600 py-2 md:py-4"
              >
                Qui sommes-nous
              </a>
            </li>
            <li className="my-4">
              <a
                href=""
                className="text-md md:text-lg text-gray-600 py-2 md:py-4"
              >
                <span className="inline-block">Contactez le support</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block ml-4 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </ul>
      </nav>
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500}>
        <nav className="absolute top-0 right-0 bottom-0 left-0 py-4 px-8 bg-background flex justify-between flex-col">
          <ul>
            <li className="group flex justify-between items-center border-b-[1px] border-b-secondary mb-2 cursor-pointer">
              <h4 className="text-primary text-2xl font-medium my-2">
                Solutions
              </h4>
              <button className="relative block w-6 h-6">
                <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground group-hover:card-foreground transition size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Service cloud
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Pack all-inclusive
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Service de support
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Service de maintenance
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Stratégie et Gestion de Projets
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Sécurité informatique
              </Link>
            </li>
          </ul>
          <ul className="mt-8 md:mt-14 w-full">
            <li className="my-4 w-full">
              <a
                href=""
                className="flex justify-between items-center text-md md:text-lg md:py-4 w-full bg-card p-3 rounded-lg"
              >
                <span className="inline-block">Contactez le support</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block ml-4 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </CSSTransition>
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500}>
        <nav className="absolute top-0 right-0 bottom-0 left-0 py-4 px-8 bg-background flex justify-between flex-col">
          <ul>
            <li className="group flex justify-between items-center border-b-[1px] border-b-secondary mb-2 cursor-pointer">
              <h4 className="text-primary text-2xl font-medium my-2">
                Stratégie et Gestion de Projets
              </h4>
              <button className="relative block w-6 h-6">
                <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground group-hover:card-foreground transition size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Gouvernance & conseils
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Conduite de projet IT
              </Link>
            </li>
          </ul>
          <ul className="mt-8 md:mt-14 w-full">
            <li className="my-4 w-full">
              <a
                href=""
                className="flex justify-between items-center text-md md:text-lg md:py-4 w-full bg-card p-3 rounded-lg"
              >
                <span className="inline-block">Contactez le support</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block ml-4 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </CSSTransition>
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500}>
        <nav className="absolute top-0 right-0 bottom-0 left-0 py-4 px-8 bg-background flex justify-between flex-col">
          <ul>
            <li className="group flex justify-between items-center border-b-[1px] border-b-secondary mb-2 cursor-pointer">
              <h4 className="text-primary text-2xl font-medium my-2">
                Sécurité informatique
              </h4>
              <button className="relative block w-6 h-6">
                <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] block bg-primary group-hover:bg-foreground transition rounded-full w-6 h-6"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4 w-4 text-primary-foreground group-hover:card-foreground transition size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Service de sécurité
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Audit de sécurité
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Formation de sécurité
              </Link>
            </li>
            <li className="group">
              <Link
                href="/solutions/service-cloud"
                className="block text-lg md:text-xl font-medium py-3 md:py-4 group-hover:text-primary transition"
              >
                Protection sinistre
              </Link>
            </li>
          </ul>
          <ul className="mt-8 md:mt-14 w-full">
            <li className="my-4 w-full">
              <a
                href=""
                className="flex justify-between items-center text-md md:text-lg md:py-4 w-full bg-card p-3 rounded-lg"
              >
                <span className="inline-block">Contactez le support</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block ml-4 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </CSSTransition>
    </div>
  );
};
