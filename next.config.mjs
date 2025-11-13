/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/nepal-premier-league/npl-2082',
        destination: '/nepal-premier-league/npl-2082-team-and-players',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
