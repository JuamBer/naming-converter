import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: [
    "src/factory/create-string-converter.ts",
    "src/factory/create-object-converter.ts",
    "src/shared/models/definitions.ts",
  ],
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
};
