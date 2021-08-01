// next.config.js
const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([
  [nextImages()],
  {
    images: {
      disableStaticImages: true,
    },
  },
  [withBundleAnalyzer({})],
]);
