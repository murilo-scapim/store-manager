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

const findById = async (id) => model.findById(id);

const update = async (id, products) => {
  const sale = await findById(id);
  if (!sale.length) return null;
  
  await Promise.all(products.map((p) => model.update(id, p)));

  return {
    saleId: id,
    itemsUpdated: products,
  };
};

const drop = async (id) => model.drop(id);

module.exports = {
  create,
  findAll,
  findById,
  update,
  drop,
};