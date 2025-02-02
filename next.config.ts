/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Replace this with the correct hostname (e.g., sanity.io, cloudinary.com, etc.)
        port: '', // Leave empty if not required
        pathname: '**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
