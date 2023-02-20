const { Router } = require('express');
const { create } = require('../controllers/sale.controllers');
const { validateSale } = require('../middlewares/validate.sale');

const saleRouter = Router();

saleRouter.post('/', validateSale, create);

module.exports = saleRouter;