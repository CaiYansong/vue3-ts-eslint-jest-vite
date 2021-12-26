module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["prettier"],
  extends: [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
