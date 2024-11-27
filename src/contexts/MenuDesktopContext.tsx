"use client";
import { createContext, useContext, useState, useEffect, ReactNode, use } from "react";

interface MenuDesktopContextProps {
    menuOpen: boolean;
    toggleMenu: () => void;
}

// Crée le contexte
const MenuDesktopContext = createContext<MenuDesktopContextProps | undefined>(undefined);

export const MenuDesktopProvider = ({ children }: { children: ReactNode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {setMenuOpen((prev) => !prev)}

    return (
        <MenuDesktopContext.Provider value={{ menuOpen, toggleMenu }}>
            {children}
        </MenuDesktopContext.Provider>
    );
};

export const useMenuDesktop = () => {
    const context = useContext(MenuDesktopContext);
    if(!context){
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
}