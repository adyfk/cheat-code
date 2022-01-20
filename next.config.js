/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPlugins = require('next-compose-plugins');
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// });

module.exports = withPlugins([
  // [
  //   withMDX, {
  //     pageExtensions: ['md', 'mdx'],
  //   },
  // ],
], nextConfig);
