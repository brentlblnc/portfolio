const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src') + "\\js\\index.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    devServer: {
        inline: true,
        host: '127.0.0.1', 
        port: 5500
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["env"]
            }
        }]
    }
}