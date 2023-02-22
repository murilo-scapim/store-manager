const { Router } = require('express');
const sale = require('../controllers/sale.controllers');
const { validateSale, validateProduct } = require('../middlewares/validate.sale');

const saleRouter = Router();

saleRouter
  .post('/', validateSale, validateProduct, sale.create)
  .get('/', sale.findAll)
  .get('/:id', sale.findById)
  .put('/:id', validateSale, validateProduct, sale.update)
  .delete('/:id', sale.drop);

module.exports = saleRouter;