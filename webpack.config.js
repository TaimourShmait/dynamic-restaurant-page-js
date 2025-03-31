const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    
    output: {filename: "bundle.js", path: path.resolve(__dirname, "dist"), clean: true},

    devtool: "eval-source-map", devServer: {watchFiles: ["./src/template.html"]},

    mode: "development",

    module: {
        // CSS, Image, HTML loaders
        rules: 
        [ 
            {test: /\.css$/i, use: ["style-loader", "css-loader"]},
            {test: /\.html$/i, loader: "html-loader"},
            {test: /\.(png|jpg|gif|svg|jpeg)$/i, type: "asset/resource"}
        ]
    },  
   
    // HTML handling
    plugins: [new htmlPlugin({template: "./src/template.html"})],

    // Hot reloading with webpack-dev-server
    // devServer: {static: "./dist", hot: true, open: true, port: 3000}
};