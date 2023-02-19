const model = require('../models/product.model');

const findAll = async () => model.findAll();

const create = async (name) => model.create(name);

module.exports = {
  findAll,
  create,
};