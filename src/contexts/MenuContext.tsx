"use client";
import { createContext, useContext, useState, useEffect, ReactNode, use } from "react";

interface MenuContextProps {
    activeMenu: string | null;
    toggleMenu: (menuId: string) => void;
    removeMenu: () => void;
}

// Crée le contexte
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (menuId: string) => {
        setActiveMenu((prev) => (prev === menuId ? null : menuId));
      };

    const removeMenu = () => {
        setActiveMenu(null);
    }

    return (
        <MenuContext.Provider value={{ removeMenu, activeMenu, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if(!context){
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
}