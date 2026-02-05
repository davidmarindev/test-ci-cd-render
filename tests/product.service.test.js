const productService = require('../src/services/product.service');

describe('product.service', () => {
  beforeEach(() => {
    productService.resetStore();
  });

  test('createProduct with valid data', () => {
    const product = productService.createProduct({ title: 'Book', price: 10 });
    expect(product).toMatchObject({ title: 'Book', price: 10 });
    expect(product.id).toBeDefined();
  });

  test('createProduct without title throws', () => {
    expect(() => {
      productService.createProduct({ price: 10 });
    }).toThrow('title is required');
  });

  test('createProduct without price throws', () => {
    expect(() => {
      productService.createProduct({ title: 'Book' });
    }).toThrow('price must be a number greater than 0');
  });
});
