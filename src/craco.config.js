import { cracoAlias } from "craco-alias";

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig",
      },
    },
  ],
};
