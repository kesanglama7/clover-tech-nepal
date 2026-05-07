import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // You can leave port and pathname empty to allow all images from this host
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
