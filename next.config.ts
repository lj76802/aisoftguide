import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.aisoftguide.com"],
    unoptimized: true,
  },
  // Ensure trailing slashes are consistent for SEO
  trailingSlash: false,
  // Compress output
  compress: true,
  // Power header removed for cleaner response
  poweredByHeader: false,
};

export default nextConfig;
