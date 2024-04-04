/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.iictmsl.com",'photos.google.com','i.ibb.co'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // experimental: {
  //   appDir: true,
  // },
};



module.exports = nextConfig;
