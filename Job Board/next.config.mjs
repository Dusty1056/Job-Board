import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'ansh-job-board.s3.amazonaws.com',
        },
        ],
    },
};

export default nextConfig;
