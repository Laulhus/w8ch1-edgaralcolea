/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["raw.githubusercontent.com", "media-exp1.licdn.com"],
  },
};
