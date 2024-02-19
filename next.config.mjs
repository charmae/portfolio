/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        path: '/portfolio'
    },
    env: {
        EMAILJS_KEY: process.env.EMAILJS_KEY, 
        EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID, 
        EMAILJS_TEMPLATEID: process.env.EMAILJS_TEMPLATEID,
        EMAILJS_RECAPTCHA: process.env.EMAILJS_RECAPTCHA
    }
};

export default nextConfig;
