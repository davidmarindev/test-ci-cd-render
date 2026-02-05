const express = require('express');
const productsRouter = require('./routes/products.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/products', productsRouter);

app.use(errorHandler);

module.exports = app;
