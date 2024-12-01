const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ansh-job-board.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;