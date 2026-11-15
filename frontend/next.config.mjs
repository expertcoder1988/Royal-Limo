/** @type {import('next').NextConfig} */
export default {
  
  //output: 'export', // Enable static export
    output: 'standalone', 
  reactStrictMode: true,  // Enable React strict mode 
  // swcMinify: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};
