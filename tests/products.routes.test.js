const request = require('supertest');
const app = require('../src/app');
const productService = require('../src/services/product.service');

describe('products routes', () => {
  beforeEach(() => {
    productService.resetStore();
  });

  test('GET /api/products -> 200 + array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/products -> 201', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ title: 'Phone', price: 299.99 });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ title: 'Phone', price: 299.99 });
    expect(res.body.id).toBeDefined();
  });

  test('GET /api/products/:id nonexistent -> 404', async () => {
    const res = await request(app).get('/api/products/999');
    expect(res.status).toBe(404);
  });

  test('DELETE /api/products/:id nonexistent -> 404', async () => {
    const res = await request(app).delete('/api/products/999');
    expect(res.status).toBe(404);
  });
});
