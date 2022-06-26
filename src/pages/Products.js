import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Steps from '../components/Steps';
import ProductsList from '../components/ProductsList';
import productsJson from '../data/Products.json';

const Products = () => {
  const [products, setProducts] = useState(productsJson);
  const [searchFilter, setSearchFilter] = useState(null);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Steps />
      <div class="container mx-auto">
        <ProductsList products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
