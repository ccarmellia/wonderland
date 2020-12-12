const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/', {
      target: 'http://182.254.159.37:90', //配置请求的服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/': '/'
      }
    }),
  );
};