module.exports = {
  publicPath: '/',
  chainWebpack(config){
    config.module.rule('md').test(/\.md$/).use('html-loader').loader('html-loader').options({
      minimize:{
        collapseWhitespace:false,// 清理html中的空格、换行符
        removeAttributeQuotes:false,// 删除引号
      }
    })
    .end()
    .use('markdown-loader')
    .loader('markdown-loader')
    .end()
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 引入px2rem,自动将px转换成rem,如果个别地方不想转换px。可以简单的使用大写的PX或Px
          require('postcss-px2rem')({
            remUnit: 10 // 基准值
          })
        ]
      }
    }
  }
}
