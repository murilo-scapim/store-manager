const connection = require('../database/connection');

const create = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

const createSalesProducts = async (product) => {
  console.log(product);
  await connection.execute(`INSERT INTO StoreManager.sales_products
    VALUES (?, ?, ?);`, [product.saleId, product.productId, product.quantity]);
};

module.exports = {
  create,
  createSalesProducts,
};