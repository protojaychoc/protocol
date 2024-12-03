"use client";
import { createContext, useContext, useState, useEffect, ReactNode, use } from "react";

interface MenuDesktopContextProps {
    activeMenu: string | null;
    toggleMenu: (menuId: string) => void;
    removeMenu: () => void;
}

// Crée le contexte
const MenuDesktopContext = createContext<MenuDesktopContextProps | undefined>(undefined);

export const MenuDesktopProvider = ({ children }: { children: ReactNode }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (menuId: string) => {
        setActiveMenu((prev) => (prev === menuId ? null : menuId));
      };

    const removeMenu = () => {
        setActiveMenu(null);
    }

    return (
        <MenuDesktopContext.Provider value={{ removeMenu, activeMenu, toggleMenu }}>
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