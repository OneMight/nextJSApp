import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://cdn.dummyjson.com/**")],
  },
};

export default nextConfig;
