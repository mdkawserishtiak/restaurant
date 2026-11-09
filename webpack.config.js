import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "assets/[hash][ext][query]",
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    devServer: {
      static: "./dist",
      watchFiles: ["./src/template.html"],
      hot: true,
      compress: true,
      port: 8080,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
            }
          : false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "@tailwindcss/webpack"],
        },
        {
          test: /\.html$/i,
          use: ["html-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    optimization: {
      runtimeChunk: isProduction ? "single" : false,
    },
  };
};
