const service = require('../services/product.service');

const findAll = async (req, res) => {
  const products = await service.findAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await service.findById(id);
  
  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name } = req.body;
  const product = await service.create(name);
  return res.status(201).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = await service.update(id, name);
  
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
};