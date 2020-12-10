const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://api.readhub.cn', //配置请求的服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/'
      }
    }),
    proxy('/api/topic', {
      target: 'https://api.readhub.cn', //配置请求的服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/topic': '/'
      }
    })
  );
};