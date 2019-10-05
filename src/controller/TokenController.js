const UserRepository = require('../repository/UsuarioRepository');
const jwt = require('jsonwebtoken');

const TokenController = {
  GetToken({ firebaseId }, tokenKey) {
    return UserRepository.GetByFirebaseId({
      firebaseId
    })
      .then(user => {
        if (!user) return Promise.reject(new Error('Usuário não encontrado.'));

        const token = TokenController.GerarPayload(user, tokenKey);

        return Promise.resolve(token);
      })
      .catch(error => Promise.reject(error));
  },

  Verify(token, tokenKey) {
    return jwt.verify(token, tokenKey, err => {
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
  },

  GerarPayload(user, tokenKey) {
    const payload = {
      name: user.nome,
      id: user._id,
      email: user.email,
      type: user._type,
      firebaseId: user.firebaseId
    };

    if (user._type === 'Personal') {
      Object.assign(payload, { code: user.code });
    }

    if (user._type === 'Aluno') {
      Object.assign(payload, { personal: user.personal });
    }

    const token = jwt.sign(payload, tokenKey, {
      expiresIn: '24h'
    });

    return token;
  }
};

module.exports = TokenController;
