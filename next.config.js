const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "daisyui.com", "i.imgur.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = withBundleAnalyzer(nextConfig);
