
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function objectUrlToBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  return await response.blob();
} 
