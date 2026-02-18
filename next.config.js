/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ameaucorps.fr" }],
        destination: "https://www.ameaucorps.fr/:path*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
