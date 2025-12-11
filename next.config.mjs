/** @type {import('next').NextConfig} */
const nextConfig = {
// output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
