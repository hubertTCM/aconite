import merge from "webpack-merge";
import { Configuration, DefinePlugin } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

import common from "./webpack-common";

const devServer: DevServerConfiguration = {
  hot: true,
  port: 3030,
  historyApiFallback: {
    rewrites: [{ from: /./, to: "/index.html" }],
  },
  allowedHosts: "all",
  headers: {
    "Cache-Control":
      "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  },
};

export const getHtmlWebpackPlugin = (
  options: HtmlWebpackPlugin.Options = {}
) => {
  const defaultOptions: HtmlWebpackPlugin.Options = {
    title: "Strengthen self without stopping", // 天行健，君子以自强不息
    template: "./src/template.html",
    hash: true,
    favicon: "./assets/favicon.png",
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
  };
  return new HtmlWebpackPlugin({ ...defaultOptions, ...options });
};

const config: Configuration = merge(common, {
  mode: "development",
  devtool: "inline-cheap-module-source-map",
  devServer,
  output: {
    publicPath: "/",
    filename: "assets/[name].[hash].js",
    chunkFilename: "assets/[name].[hash].js",
  },

  plugins: [
    // https://webpack.js.org/plugins/define-plugin/
    new DefinePlugin({
      DEVELOPMENT: JSON.stringify(true),
    }),
    // https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
    new NodePolyfillPlugin(),
    new ReactRefreshWebpackPlugin(),
    getHtmlWebpackPlugin(),
  ],
});

export default config;
