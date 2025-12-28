// next.config.ts - MINIMAL
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Just this one line might fix it
  compiler: {
    styledComponents: false,
  },
};

export default nextConfig;