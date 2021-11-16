module.exports = {
  publicPath: '/',
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
