module.exports = {
  verbose: true,
  transform: {
    "\\.[jt]sx?$": [
      "esbuild-jest",
      {
        loaders: {
          ".spec.js": "tsx",
          ".js": "sx",
        },
      },
    ],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
