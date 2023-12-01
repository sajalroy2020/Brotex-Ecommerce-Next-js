/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    output: 'export',
    images:{
        unoptimized: true,
        remotePatterns:[
            {
            protocol: "https",
            hostname: "admin.brotexbd.com",
            },
        ],
        minimumCacheTTL: 1500000,
    },
};

module.exports = nextConfig
