/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['.'],
  },
  eslint: {
    // 在构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
