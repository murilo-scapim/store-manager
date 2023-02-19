const service = require('../models/product.model');

const findAll = async (req, res) => {
  const products = await service.findAll();
  return res.status(200).json(products);
};

module.exports = {
  findAll,
};