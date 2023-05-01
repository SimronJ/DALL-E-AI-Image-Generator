/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "ronaiimagegeneratoeb550e.blob.core.windows.net",
      "links.papareact.com",
    ],
  },
};
