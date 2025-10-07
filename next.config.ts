import { NextConfig } from 'next'
import { Configuration } from 'webpack'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config: Configuration) {
    config.output = {
      ...config.output,
      publicPath: '/',
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
