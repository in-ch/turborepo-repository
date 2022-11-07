/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
  // Add "math-helpers" to this array:
  "math-helpers",
]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
});
