import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductsList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(products.products);
  const [selectedApplianceType, setSelectedApplianceType] = useState('All');

  console.log('products', visibleProducts);
  console.log('selectedAppliance', selectedApplianceType);

  useEffect(() => {
    const filteredProducts = products.products.filter((product) => {
      return product.type === selectedApplianceType;
    });

    setVisibleProducts(
      selectedApplianceType === 'All' ? products.products : filteredProducts
    );
  }, [selectedApplianceType]);

  return (
    <div>
      <div className="flex flex-row justify-center md:justify-start lg:justify-start">
        <select
          class="select select-accent w-full max-w-xs"
          value={selectedApplianceType}
          onChange={(e) => setSelectedApplianceType(e.target.value)}
        >
          <option value="All">Select appliance type</option>
          <option value="Wash Machine">Wash Machine</option>
          <option value="Tumble Dryer">Tumble Dryer</option>
          <option value="Fridge Freezer">Fridge Freezer</option>
          <option value="Dishwasher">Dishwasher</option>
          <option value="TV">TV</option>
        </select>
      </div>
      {selectedApplianceType !== 'All' && (
        <div className="pt-8 flex flex-row justify-center md:justify-start lg:justify-start">
          <button
            class="btn btn-wide normal-case"
            onClick={() => setSelectedApplianceType('All')}
          >
            <div class="badge badge-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {selectedApplianceType}
            </div>
          </button>
        </div>
      )}
      <div className="pt-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 py-5">
          {visibleProducts.map((product) => (
            <div>
              <div class="card card-side bg-white shadow-xl h-96 lg:h-80 md:h-80">
                <figure className="px-10 pt-10 md:px-0 lg:px-0 md:pt-0 lg:pt-0">
                  <img
                    className="object-cover h-48 w-full"
                    src={product.url}
                    alt="Movie"
                  />
                </figure>
                <div class="card-body text-black">
                  <h2 class="card-title pb-2">{product.name}</h2>
                  <div className="badge badge-outline badge-lg">
                    {product.rating}
                  </div>
                  <div className="badge badge-outline badge-lg">1400 rpm</div>
                  <div className="badge badge-outline badge-lg">
                    {product.dimensions.height} x {product.dimensions.width} x{' '}
                    {product.dimensions.depth}
                  </div>
                  <div class="badge badge-success badge-lg">
                    {product.price}
                  </div>
                  <div class="card-actions justify-start md:justify-end lg:justify-end pt-5">
                    <button class="btn btn-primary btn-md">
                      <FontAwesomeIcon icon={faShoppingCart} className="p-2" />
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
