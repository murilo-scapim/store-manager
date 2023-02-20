const service = require('../services/sale.service');

const create = async (req, res) => {
  const sale = await service.create(req.body);
  return res.status(201).json(sale);
};

module.exports = {
  create,
};