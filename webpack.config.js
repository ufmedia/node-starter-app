const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    entry: "./src/assets/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "assets"),
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [new NodemonPlugin()]
};

