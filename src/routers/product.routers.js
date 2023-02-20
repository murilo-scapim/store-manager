const { Router } = require('express');
const { findAll, create, findById } = require('../controllers/product.controllers');
const { validateProduct } = require('../middlewares/validate.product');

const productRouter = Router();

productRouter
  .get('/', findAll)
  .get('/:id', findById)
  .post('/', validateProduct, create);

module.exports = productRouter;