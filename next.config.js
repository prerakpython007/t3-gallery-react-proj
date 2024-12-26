/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images:{
        remotePatterns: [
            {hostname: "5nrgwkug8b9ckgoo.public.blob.vercel-storage.com"}
        ]
    },
    typescript:{
        ignoreBuildErrors: true,
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};



export default config;
