const { Router } = require('express');
const { create, findAll } = require('../controllers/sale.controllers');
const { validateSale, validateProduct } = require('../middlewares/validate.sale');

const saleRouter = Router();

saleRouter
  .post('/', validateSale, validateProduct, create)
  .get('/', findAll);

module.exports = saleRouter;