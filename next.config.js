/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
