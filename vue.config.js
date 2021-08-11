module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.ituring.com.cn',
        changeOrigin: true
      }
    }
  }
}
