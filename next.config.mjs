/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['.'],
    // prependData: `@import "@/styles/variables.scss";`, // 可选：全局变量
  },
}

export default nextConfig
