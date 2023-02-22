const model = require('../models/sale.model');

const create = async (products) => {
  const saleId = await model.create();

  await Promise.all(products.map((product) =>
    model.createSalesProducts({ saleId, ...product })));

  return {
    id: saleId,
    itemsSold: products,
  };
};

const findAll = async () => model.findAll();

module.exports = {
  create,
  findAll,
};