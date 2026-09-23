import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// next/image doesn't apply basePath to string srcs, so root-relative asset
// paths must be prefixed by hand to work when deployed under a subpath.
export function withBasePath(src: string) {
  if (!src.startsWith('/')) return src
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`
}
