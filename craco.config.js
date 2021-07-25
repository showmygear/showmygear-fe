module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
  configure: function(webpackConfig) {
    const fragLoader = {
      test: /\.frag$/,
      use: ['raw-loader']
    };

    addBeforeLoader(webpackConfig, loaderByName("file-loader"), fragLoader );

    return webpackConfig;
  },
}
