<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
});
=======
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
>>>>>>> 49dc5787a9b651f50721ade8f1b916c24593a5da
