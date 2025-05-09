// @ts-check
import withBundleAnalyzer from "@next/bundle-analyzer";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@node-rs/xxhash"],
  },
  output: "standalone",

  images: {
    remotePatterns: [
      // allow loading avatar images my aws cdn
      {
        protocol: "https",
        hostname: "d1jcobewzbwt6k.cloudfront.net",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE !== undefined,
})(config);
