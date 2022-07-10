import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Steps from '../components/Steps';
import ProductsList from '../components/ProductsList';
import productsJson from '../data/Products.json';

const Products = () => {
  return (
    <div>
      <Navbar />
      <Steps />
      <div class="container mx-auto">
        <ProductsList products={productsJson} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
