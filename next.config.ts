import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://cdn.dummyjson.com/**"),
      new URL("https://dummyimage.com/**"),
    ],
  },
};

export default nextConfig;
