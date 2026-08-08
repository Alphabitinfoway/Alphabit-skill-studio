/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize heavy barrel file imports for instant module resolution
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'embla-carousel-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
