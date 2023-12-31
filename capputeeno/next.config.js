/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  }
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/xesque-dev/**',
      },
    ],
  },
}
module.exports = nextConfig
