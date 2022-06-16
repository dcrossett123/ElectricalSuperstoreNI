import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsList from '../components/ProductsList';

const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Products;
