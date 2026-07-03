import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  /* config options here */
  images: {
    // domains: ['covers.openlibrary.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
    ],
  },
} as NextConfig;

// export default nextConfig;
export default nextConfig;
