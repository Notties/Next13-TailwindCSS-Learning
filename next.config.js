/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    appDir: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
