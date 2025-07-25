/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'agzjswukyilizybqfqmr.supabase.co',
        pathname: '/**', // Wildcard path for all images
      },],
  },
}

export default nextConfig
