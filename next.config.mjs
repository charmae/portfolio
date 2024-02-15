/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/portfolio',
    // images: {
    //     loader: 'akamai',
    //     path: './',
    //   }
    images: {
        unoptimized: true,
        path: '/portfolio'
    }
};

export default nextConfig;
