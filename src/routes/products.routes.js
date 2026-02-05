const express = require('express');
const productService = require('../services/product.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(productService.list());
});

router.get('/:id', (req, res) => {
  const product = productService.getById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'product not found' });
  }
  res.json(product);
});

router.post('/', (req, res, next) => {
  try {
    const product = productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    err.status = 400;
    next(err);
  }
});

router.delete('/:id', (req, res) => {
  const deleted = productService.deleteById(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'product not found' });
  }
  res.status(204).send();
});

module.exports = router;
