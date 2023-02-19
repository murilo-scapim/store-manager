const model = require('../models/product.model');

const findAll = async () => model.findAll();

module.exports = {
  findAll,
};