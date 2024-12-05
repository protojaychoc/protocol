"use client";
import { createContext, useContext, useState, useEffect, ReactNode, use } from "react";

interface MenuContextProps {
    activeMenuDesktop: string | null;
    activeMenuMobile: boolean;
    toggleMenuDesktop: (menuId: string) => void;
    toggleMenuMobile: () => void;
    closAllMenus: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [activeMenuDesktop, setActiveMenuDesktop] = useState<string | null>(null);
    const [activeMenuMobile, setActiveMenuMobile] = useState(false);

    const toggleMenuDesktop = (menuId: string) => {
        setActiveMenuDesktop((prev) => (prev === menuId ? null : menuId));
        setActiveMenuMobile(false);
    };

    const toggleMenuMobile = () => {
        setActiveMenuMobile((prev) => !prev);
        setActiveMenuDesktop(null);
    }

    const closAllMenus = () => {
        setActiveMenuDesktop(null);
        setActiveMenuMobile(false);
    }

    return (
        <MenuContext.Provider value={{ activeMenuDesktop, activeMenuMobile, toggleMenuDesktop, toggleMenuMobile, closAllMenus }}>
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