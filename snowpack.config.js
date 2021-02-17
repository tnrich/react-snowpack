/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {

    Demo: '/',
    src: '/dist',
  },

  plugins: ["@snowpack/plugin-babel", "@snowpack/plugin-react-refresh"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  // packageOptions: {
  //   /* ... */
  //   source: "remote",
  // },
  // snowpack.config.js
  // routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  devOptions: {
    /* ... */
    // public: "/Demo",
    // fallback: "index.html"
  },
  buildOptions: {
    /* ... */
  },
};
