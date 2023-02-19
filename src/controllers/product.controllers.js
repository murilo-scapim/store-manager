const service = require('../services/product.service');

const findAll = async (req, res) => {
  const products = await service.findAll();
  return res.status(200).json(products);
};

const create = async (req, res) => {
  const { name } = req.body;
  const product = await service.create(name);
  return res.status(201).json(product);
};

module.exports = {
  findAll,
  create,
};