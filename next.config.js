/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.etsystatic.com',
      },
    ],
  },
};

module.exports = nextConfig;
