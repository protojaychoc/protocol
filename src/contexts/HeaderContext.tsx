"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Type pour le contexte
interface HeaderContextProps {
  showHeader: boolean;
}

// Crée le contexte
const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

// Fournisseur de contexte
export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowHeader(false); // Cache le header si on défile vers le bas
    } else {
      setShowHeader(true); // Affiche le header si on défile vers le haut
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderContext.Provider value={{ showHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
