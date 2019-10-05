const baseUrl = '/api/token';
const TokenController = require('../controller/TokenController');
const routerHandler = require('../utils/RouterHandler');

module.exports = app => {
  app.get(baseUrl, routerHandler(TokenController.GetToken, (req, res, next) => [req.query, app.get('superSecret')]));
};
