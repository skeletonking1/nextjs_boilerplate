/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/src/pages",
      },
    ];
  },
}

module.exports = nextConfig
