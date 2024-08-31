/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdcgrouplimited.com",
      },
      {
        protocol: "https",
        hostname: "cdcdevelopment.co.uk",
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  //   basePath: "/test",
};

export default nextConfig;
