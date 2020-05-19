const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = ['js', 'css']

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
const BASE_URL = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_TITLE === 'test' ? '/' : '/'
  : '/'
module.exports = {
  publicPath: BASE_URL,
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets',
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }))
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  // 打包时不生成.map文件
  productionSourceMap: true,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: ''
  // }
}
