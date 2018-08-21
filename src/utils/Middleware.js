const TokenController = require('../controller/TokenController');
const environment = require('../config/environment');

const authException = [{
  url: '/api/token',
  method: 'GET',
}, {
  url: '/api/usarios',
  method: 'POST',
}];

const Middleware = {
  Auth(req, res, next) {
    const isException = authException.some(ex => req.url.includes(ex.url) && req.method === ex.method);

    if (!isException) {
      if (!req.headers.authorization) {
        res.status(400).send({ error: 'missing authorization header' });
      }

      TokenController.Verify(req.headers.authorization, environment.application.application.secret).then((isAuthorizate) => {
        if (!isAuthorizate) {
          res.status(401).send({ error: 'Você está sem acesso.' });
        }

        next();
      }).catch((err) => {
        res.status(401).send({ error: 'Você está sem acesso.' });
      });
    } else {
      next();
    }
  },
};

module.exports = Middleware;

