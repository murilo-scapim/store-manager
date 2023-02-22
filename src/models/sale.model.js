const connection = require('../database/connection');

const create = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

const createSalesProducts = async (product) => {
  await connection.execute(`INSERT INTO StoreManager.sales_products
    VALUES (?, ?, ?);`, [product.saleId, product.productId, product.quantity]);
};

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales s INNER JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id;`,
  );
  return sales;
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales s INNER JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id WHERE s.id = ?;`, [id],
  );
  return sale;
};

const update = async (id, product) => {
  await connection.execute(
    `UPDATE StoreManager.sales_products SET quantity = ?
    WHERE product_id = ? AND sale_id = ?`,
    [product.quantity, product.productId, id],
  );
};

const drop = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return !!affectedRows;
};

module.exports = {
  create,
  createSalesProducts,
  findAll,
  findById,
  update,
  drop,
};