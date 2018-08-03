import node from "rollup-plugin-node-resolve";

export default {
  entry: "index.js",
  output: {
    format: "iife",
    name: "d3",
    file: "d3.js"
  },


  plugins: [node()],

};
