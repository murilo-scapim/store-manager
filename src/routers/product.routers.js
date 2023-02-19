const { Router } = require('express');
const { findAll } = require('../controllers/product.controllers');

const productRouter = Router();

productRouter
  .get('/', findAll);

module.exports = productRouter;