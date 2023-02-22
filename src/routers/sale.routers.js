const { Router } = require('express');
const { create, findAll, findById, update } = require('../controllers/sale.controllers');
const { validateSale, validateProduct } = require('../middlewares/validate.sale');

const saleRouter = Router();

saleRouter
  .post('/', validateSale, validateProduct, create)
  .get('/', findAll)
  .get('/:id', findById)
  .put('/:id', validateSale, validateProduct, update);

module.exports = saleRouter;