"use client";

import { useEffect } from "react";
import { useMenu } from "../contexts/MenuContext";

const BodyClassManager = () => {
  const { activeMenuDesktop } = useMenu();

  useEffect(() => {
    // Ajoute ou supprime la classe en fonction de `activeMenuDesktop`
    if (activeMenuDesktop) {
      document.body.classList.add(`overflow-y-hidden`);
    } else {
      document.body.classList.remove(`overflow-y-hidden`);
    }

    // Nettoie l'effet
    return () => {
      document.body.classList.remove(`overflow-y-hidden`);
    };
  }, [activeMenuDesktop]);

  return null; // Pas besoin de rendre quoi que ce soit
};

export default BodyClassManager;
