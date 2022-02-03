const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPlugins = require('next-compose-plugins');
console.log(process.env.NODE_ENV);
module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        cacheOnFrontEndNav: true,
      },
    },
  ],
], nextConfig);
