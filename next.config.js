// next.config.js
const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const plugins = [
  [nextImages()],
  {
    images: {
      disableStaticImages: true,
    },
  },
];

module.exports = process.env.ANALYZE
  ? withPlugins([plugins, ...[[withBundleAnalyzer({})]]])
  : withPlugins(plugins);
