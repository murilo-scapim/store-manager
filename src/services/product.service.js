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

const drop = async (id) => model.drop(id);

const search = async (q) => model.search(q);

module.exports = {
  findAll,
  findById,
  create,
  update,
  drop,
  search,
};