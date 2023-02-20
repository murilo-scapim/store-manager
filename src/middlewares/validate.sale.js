const joi = require('joi');

const validateSale = async (req, res, next) => {
  const schema = joi.array().items(joi.object({
    productId: joi.number().integer().required().label('productId'),
    quantity: joi.number().integer(0).min(1).required()
      .label('quantity'),
  }));

  const { error } = schema.validate(req.body);
  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }
  next();
};

module.exports = {
  validateSale,
};