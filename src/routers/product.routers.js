const { Router } = require('express');
const { findAll, create } = require('../controllers/product.controllers');
const { validateProduct } = require('../middlewares/validate.product');

const productRouter = Router();

productRouter
  .get('/', findAll)
  .post('/', validateProduct, create);

module.exports = productRouter;