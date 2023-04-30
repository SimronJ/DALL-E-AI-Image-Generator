/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "ronaiimagegeneratoeb550e.blob.core.windows.net"]
  },
};

module.exports = nextConfig
