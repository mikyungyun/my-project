/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-contact/:path*",
        destination: '/new-contact/:path*',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
