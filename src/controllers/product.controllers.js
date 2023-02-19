const service = require('../services/product.service');

const findAll = async (req, res) => {
  const products = await service.findAll();
  return res.status(200).json(products);
};

const create = async (req, res) => {

};

module.exports = {
  findAll,
  create,
};