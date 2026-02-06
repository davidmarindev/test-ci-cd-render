let products = [];
let nextId = 1;

function resetStore() {
  products = [];
  nextId = 1;
}

function list() {
  return [...products];
}

function getById(id) {
  return products.find((p) => p.id === id) || null;
}

function createProduct(data) {
  const title = data && data.title;
  const price = data && data.price;

  // if (typeof title !== 'string' || title.trim().length === 0) {
  //   throw new Error('title is required');
  // }

  if (typeof price !== 'number' || Number.isNaN(price) || price <= 0) {
    throw new Error('price must be a number greater than 0');
  }

  const product = {
    id: String(nextId++),
    title: title.trim(),
    price,
  };

  products.push(product);
  return product;
}

function deleteById(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}

module.exports = {
  list,
  getById,
  createProduct,
  deleteById,
  resetStore,
};
