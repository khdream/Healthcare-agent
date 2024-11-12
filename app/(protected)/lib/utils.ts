import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUrl(urlComponents: string[]) {
  const url = urlComponents
    .map((component) => decodeURIComponent(component))
    .join("/");
  return url;
}