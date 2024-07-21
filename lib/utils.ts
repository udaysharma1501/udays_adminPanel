import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn - conditionally apply classes to components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
