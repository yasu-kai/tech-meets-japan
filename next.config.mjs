/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
    { source: "/research/frontier-tech/nori-a3", destination: "/research/robotics/nori-a3", permanent: true },
    { source: "/research/frontier-tech/savor-carbon-fats", destination: "/research/materials-energy/savor-carbon-fats", permanent: true },
    { source: "/research/frontier-tech/chargebotic-kestrel", destination: "/research/materials-energy/chargebotic-kestrel", permanent: true },
    { source: "/research/frontier-tech/ixana-wir", destination: "/research/gadgets/ixana-wir", permanent: true },
    { source: "/research/frontier-tech/mudra-link", destination: "/research/gadgets/mudra-link", permanent: true },
    { source: "/research/frontier-tech/ipolish-digital-nails", destination: "/research/gadgets/ipolish-digital-nails", permanent: true },
      { source: "/research/frontier-tech", destination: "/research", permanent: true },
    ];
  },
};
export default nextConfig;
