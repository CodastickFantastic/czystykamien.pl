/** @type {import('next').NextConfig} */
const nextConfig = {};
const withPWA = require("next-pwa");

module.exports = nextConfig;
module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
