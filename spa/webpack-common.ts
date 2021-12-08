import { Configuration, WatchIgnorePlugin } from "webpack";
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new WatchIgnorePlugin({ paths: [/css\.d\.ts$/, /less\.d\.ts$/] }),
  ],
};

export default config;
