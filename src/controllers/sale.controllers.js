const service = require('../services/sale.service');

const create = async (req, res) => {
  const sale = await service.create(req.body);
  return res.status(201).json(sale);
};

const findAll = async (req, res) => {
  const sales = await service.findAll();
  return res.status(200).json(sales);
};

module.exports = {
  create,
  findAll,
};