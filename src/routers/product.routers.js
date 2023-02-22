const { Router } = require('express');
const { findAll, create, findById, update } = require('../controllers/product.controllers');
const { validateProduct } = require('../middlewares/validate.product');

const productRouter = Router();

productRouter
  .get('/', findAll)
  .get('/:id', findById)
  .post('/', validateProduct, create)
  .put('/:id', validateProduct, update);

module.exports = productRouter;