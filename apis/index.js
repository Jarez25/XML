const app = require('./app');

// Exporta la instancia de Express como una función handler
module.exports = (req, res) => {
  app(req, res);
};
