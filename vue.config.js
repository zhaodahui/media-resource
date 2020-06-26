let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

module.exports = {
  publicPath
  // runtimeCompiler: true // 用来支持在客户端编译模板，传入一个字符串给 template 选项
  // ,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     config.mode = 'production'
  //     // 将每个依赖包打包成单独的js文件
  //     let optimization = {
  //       splitChunks: {
  //         chunks: "all",
  //         minSize: 30000,
  //         minChunks: 1,
  //         maxAsyncRequests: 5,
  //         maxInitialRequests: 3,
  //         automaticNameDelimiter: '~',
  //         cacheGroups: {
  //           vendors: {
  //             test: /[\\/]node_modules[\\/]/,
  //             name(module) {
  //               // get the name. E.g. node_modules/packageName/not/this/part.js
  //               // or node_modules/packageName
  //               const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
  //               // npm package names are URL-safe, but some servers don't like @ symbols
  //               return `npm.${packageName.replace('@', '')}`
  //             }
  //           }
  //         }
  //       }
  //     }
  //     Object.assign(config, {
  //       optimization
  //     })
  //   } else {
  //     // 为开发环境修改配置...
  //     config.mode = 'development'
  //   }
  // }
}