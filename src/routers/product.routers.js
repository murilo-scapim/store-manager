const { Router } = require('express');
const product = require('../controllers/product.controllers');
const { validateProduct } = require('../middlewares/validate.product');

const productRouter = Router();

productRouter
  .get('/search', product.search)
  .get('/', product.findAll)
  .get('/:id', product.findById)
  .post('/', validateProduct, product.create)
  .put('/:id', validateProduct, product.update)
  .delete('/:id', product.drop);

module.exports = productRouter;