import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

interface SWRError extends Error {
  status: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as SWRError
      error.status = res.status
      throw error
    } else {
      throw new Error("An unexpected error occurred")
    }
  }

  return res.json()
}
