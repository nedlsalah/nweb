// GitHub Pages (static) build:  EXPORT=1 NEXT_PUBLIC_BASE_PATH=/Web npm run build
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.EXPORT ? { output: "export" } : {}),
  basePath: base,
  trailingSlash: true,
};
export default nextConfig;
