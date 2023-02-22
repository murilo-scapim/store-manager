const model = require('../models/product.model');

const findAll = async () => model.findAll();

const findById = async (id) => model.findById(id);

const create = async (name) => model.create(name);

const update = async (id, name) => {
  const product = await model.findById(id);
  if (!product) return null;
  await model.update(id, name);
  return {
    id,
    name,
  };
};

module.exports = {
  findAll,
  findById,
  create,
  update,
};