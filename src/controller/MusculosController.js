/* eslint no-param-reassign: ["error", { "props": false }] */
const musculos = require('../models/Musculos');

const musculosController = {
  ListarMusculos() {
		return new Promise()
			.then(() => {
				return resolve(Object.keys(musculos).map(key => {
					return {
						id: musculos[key],
						text: key
					}
				}));
			})
			.catch(reject({ error: "" }))
  }
};

module.exports = musculosController;
