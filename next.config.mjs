/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set by the Pages workflow: "/evolab" on github.io, "" on a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
