import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProductsList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(products.products);
  const [selectedApplianceType, setSelectedApplianceType] = useState('All');
  const [selectedAppliance, setSelectedAppliance] = useState('');

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
          <option value="Cooker">Cooker</option>
          <option value="Dishwasher">Dishwasher</option>
          <option value="Washer-Dryer">Washer Dryer</option>
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
                <figure className="px-0 pt-0 md:px-10 lg:px-10 md:pt-10 lg:pt-10">
                  <img
                    className="object-scale-down h-48 w-full"
                    src={product.url}
                    alt="Movie"
                  />
                </figure>
                <div class="card-body text-black">
                  <h2 class="card-title pb-2">{product.name}</h2>
                  <div className="badge badge-outline badge-lg">
                    {product.rating}
                  </div>
                  <div className="badge badge-outline badge-lg">
                    {product.special}
                  </div>
                  <div className="badge badge-outline badge-lg">
                    {product.dimensions.height}/{product.dimensions.width}/
                    {product.dimensions.depth}
                  </div>
                  <div class="badge badge-success badge-lg">
                    {product.price}
                  </div>
                  <div class="card-actions justify-start md:justify-end lg:justify-end pt-5">
                    <label
                      onClick={() => setSelectedAppliance(product.product_code)}
                      for="my-modal-6"
                      class="btn modal-button btn-primary btn-md"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="p-2" />
                      Buy now
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Lets get the ball rolling!</h3>
          <p class="py-4">
            Get in contact with us on whatever your preference is below and
            quote the following product code.
          </p>
          <div className="flex justify-center py-8">
            <div class="badge badge-accent badge-lg text-lg">
              {selectedAppliance}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <a
                class="btn btn-outline btn-accent btn-lg text-3xl"
                href="tel:07752102564"
              >
                <FontAwesomeIcon icon={faPhone} className="p-2" />
              </a>
            </div>
            <div>
              <a
                class="btn btn-outline btn-accent btn-lg text-3xl"
                href="https://www.facebook.com/ElectricalSuperStoresNI"
              >
                <FontAwesomeIcon icon={faFacebook} className="p-2" />
              </a>
            </div>
            <div>
              <a
                class="btn btn-outline btn-accent btn-lg text-3xl"
                href="https://wa.me/+447752102564"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
