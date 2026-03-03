import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'df50lbm4qcrt6.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
