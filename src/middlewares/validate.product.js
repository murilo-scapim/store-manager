const joi = require('joi');

const schema = joi.object({
  name: joi.string().min(5).required(),
});

const validateProduct = async (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ message: 'name is required' });
  }
  
  const { error } = schema.validate({ name });
  if (error) {
    return res.status(422).json({ message: error.message });
  }
  
  next();
};

module.exports = {
  validateProduct,
};