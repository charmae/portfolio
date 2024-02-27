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
        EMAILJS_RECAPTCHA: process.env.EMAILJS_RECAPTCHA,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        NEXT_PUBLIC_EMAILJS_RECAPTCHA: process.env.EMAILJS_RECAPTCHA,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        MAPBOX_KEY: process.env.MAPBOX_KEY,
        NEXT_PUBLIC_MAPBOX_KEY: process.env.MAPBOX_KEY

    }
};

export default nextConfig;
