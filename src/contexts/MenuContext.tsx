"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  use,
} from "react";

interface MenuContextProps {
  activeMenuDesktop: string | null;
  activeMenuMobile: boolean;
  toggleMenuDesktop: (menuLink: string) => void;
  toggleMenuMobile: () => void;
  closeAllMenus: () => void;
  isDisplay: boolean;
  isVisible: boolean;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenuDesktop, setActiveMenuDesktop] = useState<string | null>(
    null
  );
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  const showMenu = () => {
    setTimeout(() => {
        setIsDisplay(true); // Affiche l'élément en `display: block`
        setIsVisible(true); // Déclenche l'animation
      }, 50);
    setActiveMenuMobile(true);
  };

  const hideMenu = () => {
    setIsVisible(false); // Lance le fade-out
    setTimeout(() => {
      setIsDisplay(false); // Cache complètement après l'animation
      setActiveMenuMobile(false);
    }, 480);
  };

  const toggleMenuMobile = () => {
    if (activeMenuMobile) {
      hideMenu();
    } else {
      showMenu();
    }
  };

  const toggleMenuDesktop = (menuLink: string) => {
    setActiveMenuDesktop((prev) => (prev === menuLink ? null : menuLink));
    if (!activeMenuDesktop) {
      hideMenu();
    }
  };

  const closeAllMenus = () => {
    setActiveMenuDesktop(null);
    setActiveMenuMobile(false);
  };

  return (
    <MenuContext.Provider
      value={{
        activeMenuDesktop,
        activeMenuMobile,
        toggleMenuDesktop,
        toggleMenuMobile,
        closeAllMenus,
        isDisplay,
        isVisible
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
};
