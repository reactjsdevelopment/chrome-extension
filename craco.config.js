module.exports = {
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      console.log(env,paths, 'paths');
      return {
        ...webpackConfig,
        entry: {
          main: [env === 'development' ||
          require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
          content: './src/chromeServices/DOMEvaluator.ts',
        },
        output: {
          ...webpackConfig.output,
          filename: 'static/js/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        }
      }
    },
  }
}
