import type { NextConfig } from "next";
import { composePlugins, withNx } from "@nx/next";

const nextConfig = {
  /* config options here */
  nx: {
    svgr: false,
  },
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

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

// export default nextConfig;
export default composePlugins(...plugins)(nextConfig);
