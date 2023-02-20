const { Router } = require('express');
const { create } = require('../controllers/sale.controllers');

const saleRouter = Router();

saleRouter.post('/', create);

module.exports = saleRouter;