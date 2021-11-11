/** @type {import('next').NextConfig} */
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    webpack: (config, {
        buildId,
        dev,
        isServer,
        defaultLoaders,
        webpack
    }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        );
        // Important: return the modified config
        return config;
    }
}