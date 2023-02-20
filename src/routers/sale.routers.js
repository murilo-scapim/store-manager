const { Router } = require('express');
const { create } = require('../controllers/sale.controllers');
const { validateSale, validateProduct } = require('../middlewares/validate.sale');

const saleRouter = Router();

saleRouter.post('/', validateSale, validateProduct, create);

module.exports = saleRouter;