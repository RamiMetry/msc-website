/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "strapi-skyshop-s3.s3.eu-west-3.amazonaws.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
