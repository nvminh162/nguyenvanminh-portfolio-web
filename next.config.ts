import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/portfolio-static",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
