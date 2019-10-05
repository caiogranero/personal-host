module.exports = {
  application: {
    application: {
      port: 1234,
      secret: 'personal-secret-key'
    }
  },

  production() {
    return Object.assign({}, this.application, {
      db: {
        name: 'admin',
        uri: process.env.COSMOSDB_CONNSTR + '?ssl=true&replicaSet=globaldb',
        auth: {
          auth: {
            user: process.env.COSMODDB_USER,
            password: process.env.COSMOSDB_PASSWORD
          }
        }
      }
    });
  },

  development() {
    return Object.assign({}, this.application, {
      db: {
        name: 'personal',
        uri: 'mongodb+srv://cubeme:cubeme123@cluster0-kxwuc.azure.mongodb.net/personal?retryWrites=true'
        // auth: {
        //   auth: {
        //     user: "cubeme",
        //     password: "cubeme123"
        //   }
        // }
      }
    });
  },

  test() {
    return Object.assign({}, this.application, {
      db: {
        name: 'admin',
        uri: process.env.COSMOSDB_CONNSTR + '?ssl=true&replicaSet=globaldb'
      }
    });
  },

  getSetup(env) {
    switch (env) {
      case 'production':
        return this.production();
      case 'development':
        return this.development();
      case 'test':
        return this.test();
      default:
        return this.development();
    }
  }
};
