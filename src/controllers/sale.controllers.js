const service = require('../services/sale.service');

const create = async (req, res) => {
  const sale = await service.create(req.body);
  return res.status(201).json(sale);
};

const findAll = async (req, res) => {
  const sales = await service.findAll();
  return res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const sale = await service.findById(id);
  if (!sale.length) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const products = req.body;
  const sale = await service.update(id, products);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

const drop = async (req, res) => {
  const { id } = req.params;
  const result = await service.drop(id);
  if (!result) return res.status(404).json({ message: 'Sale not found' });
  return res.status(204).json();
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  drop,
};