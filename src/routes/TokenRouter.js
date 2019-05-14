const baseUrl = '/api/token';
const TokenController = require('../controller/TokenController');
const routerHandler = require('../utils/RouterHandler');

module.exports = (app) => {
  app.get(baseUrl, routerHandler(TokenController.GetToken, (req, res, next) => [
    req.query,
    app.get('superSecret'),
  ]));

  // app.post(`${baseUrl}/verify`, routerHandler(TokenController.Verify, (req, res, next) => [
  //   req.headers.Authorization,
  //   app.get('superSecret'),
  // ]));

  // app.post(`${baseUrl}/decode`, routerHandler(TokenController.Decode, (req, res, next) => [
  //   req.headers.Authorization,
  //   app.get('superSecret'),
  // ]));
};
