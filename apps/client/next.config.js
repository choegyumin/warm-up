const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  transpilePackages: ['design-system'],
  compiler: {
    emotion: true,
  },
  webpack(config, options) {
    const { dev, isServer } = options;
    // Do not run type checking twice:
    if (dev && !isServer) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          devServer: dev,
          issue: {
            exclude: [{ file: '**/__mocks__/**/*' }, { file: '**/*.test.{js,jsx,ts,tsx}' }],
          },
        }),
      );
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
