import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com'
      }
    ]
  }
};

export default nextConfig;