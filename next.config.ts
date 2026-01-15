import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
