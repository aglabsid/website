/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],
  async redirects() {
    return [
      {
        source: '/chat',
        destination: 'https://t.me/aglabs_bot',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
