module.exports = {
  'src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [(files) => files.map((file) => `eslint "${file}" --fix`)],
};
