/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developer.chrome.com",
      },
    ],
  },
}

module.exports = nextConfig
