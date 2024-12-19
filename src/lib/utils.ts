import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function isEmpty(data: any) {
  if (data == null) return true; // null ou undefined
  if (Array.isArray(data)) return data.length === 0; // Tableaux vides
  if (typeof data === "object") return Object.keys(data).length === 0; // Objets vides
  if (typeof data === "string") return data.trim().length === 0; // Chaînes vides
  return false;
}
