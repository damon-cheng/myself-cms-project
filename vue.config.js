module.exports = {
  publicPath: "./",
  devServer: {
    open: true,
    port: 8888,
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        //target: "http://123.207.32.32:8000",
        pathRewrite: {
          "^/api": ""
        },
        //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，
        //并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //设置origin为target中的值
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: "@/views"
      }
    }
  }
}
