/** @type {import('next').NextConfig} */
const API_KEY = '237eb3eeefedbc6e1571ab715fec82a1';

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
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
