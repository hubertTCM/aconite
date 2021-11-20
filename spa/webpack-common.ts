import { Configuration } from "webpack";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: Configuration = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/app"),
    publicPath: "/",
    filename: "assets/[name].js",
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".mjs", ".gql"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.gql$/,
        include: /src/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  plugins: [new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
};

export default config;
