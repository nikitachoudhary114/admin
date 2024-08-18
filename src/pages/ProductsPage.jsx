import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';


function ProductsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <ProductForm/>
      <ProductList />
    </div>
  );
}

export default ProductsPage;
