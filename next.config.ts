import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.14"],
  redirects() {
    return [{ source: "/films", destination: "/other-works", permanent: true }];
  },
};

export default nextConfig;
