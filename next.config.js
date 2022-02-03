/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [
    withPWA,
    {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  ],
], nextConfig);
