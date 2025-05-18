import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://qzsrrlobwlisodbasdqi.supabase.co/**')],
  },
};

export default nextConfig;
