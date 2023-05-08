const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
