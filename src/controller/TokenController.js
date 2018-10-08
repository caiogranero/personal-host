const UserRepository = require('../repository/UsuarioRepository');
const jwt = require('jsonwebtoken');

const TokenController = {
  GetToken({ email, senha }, tokenKey) {
    return UserRepository.GetByLogin({
      email,
      senha,
    }).then((user) => {
      if (!user) return Promise.reject(new Error('Usuário não encontrado.'));

      const payload = { name: user.nome, id: user._id, email: user.email, type: user._type };

      const token = jwt.sign(payload, tokenKey, {
        expiresIn: '24h',
      });

      return Promise.resolve(token);
    }).catch(error => Promise.reject(error));
  },

  Verify(token, tokenKey) {
    return jwt.verify(token, tokenKey, (err) => {
      if (err) {
        return Promise.reject(Object.assign({ hasSession: false }, err));
      }
      return Promise.resolve({ hasSession: true });
    });
  },

  Decode(token, tokenKey) {
    return jwt.verify(token, tokenKey, (err, decoded) => {
      if (err) {
        return Promise.reject(err);
      }
      return Promise.resolve(decoded);
    });
  }
};

module.exports = TokenController;
