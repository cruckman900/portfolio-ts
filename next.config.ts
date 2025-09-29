import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true
  }
}
module.exports = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    extends: ['next/core-web-vitals'],
  },
}; module.exports = {
  webpack(config: { output: { publicPath: string; }; }) {
    config.output.publicPath = '/'
    return config
  },
}

export default nextConfig
