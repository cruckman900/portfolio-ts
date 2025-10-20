import { Configuration } from 'webpack'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['your-image-domains.com'], // optional
  },
  webpack(config: Configuration, { isServer }) {
    // Enable source maps for server-side
    if (isServer) {
      config.devtool = 'source-map'
    }

    // Set publicPath
    config.output = {
      ...config.output,
      publicPath: '/',
    }

    // Add SVG loader
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
