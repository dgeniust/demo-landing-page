import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.facebook.com' },
      { protocol: 'https', hostname: 'canhme.com' },
      { protocol: 'https', hostname: 'play-lh.googleusercontent.com' },
      { protocol: 'https', hostname: 'rubicmarketing.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'inkythuatso.com' },
      { protocol: 'https', hostname: 'media.datacamp.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'avatar.vercel.sh' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'cdn-new.topcv.vn' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      //{ protocol: 'https', hostname: 'www.freepik.com' },
      { protocol: 'https', hostname: 'timviec365.vn' },
      { protocol: 'https', hostname: 'www.topcv.vn' },
    ],
  },
};

export default nextConfig;
