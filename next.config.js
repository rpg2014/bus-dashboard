/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
//   basePath: '/C:/Users/pgive/Documents/GitHub/bus-dashboard/out'
    productionBrowserSourceMaps: true,
})
