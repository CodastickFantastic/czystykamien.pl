/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.seal.globalsign.com",
                pathname: "/SiteSeal/images/gs_noscript_100-40_en.gif",
            }
        ]
    }
};

module.exports = nextConfig;
