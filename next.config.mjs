import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  // Standalone output produces a self-contained server in .next/standalone
  // with only the node_modules it actually needs. Smaller runtime footprint,
  // and simpler to run on a self-hosted VPS — perfect for RAM-tight servers.
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default withMDX(nextConfig);
