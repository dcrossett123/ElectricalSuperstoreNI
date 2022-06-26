import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductsList = ({ products }) => {
  const productsList = products.products;

  return (
    <div>
      <div className="flex flex-row justify-center md:justify-start lg:justify-start">
        <select class="select select-accent w-full max-w-xs">
          <option disabled selected>
            Select appliance type
          </option>
          <option>Wash Machine</option>
          <option>Tumble Dryer</option>
          <option>Fridge Freezer</option>
          <option>Dishwasher</option>
          <option>TV</option>
        </select>
      </div>
      <div className="pt-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 py-5">
          <div>
            <div class="card card-side bg-white shadow-xl">
              <figure>
                <img
                  className="object-cover h-48 w-full"
                  src="https://media.currys.biz/i/currysprod/10225997?$l-large$&fmt=auto"
                  alt="Movie"
                />
              </figure>
              <div class="card-body text-black">
                <h2 class="card-title pb-2">{productsList[0].name}</h2>
                <div className="badge badge-outline badge-lg">
                  Energy Rating: A+
                </div>
                <div className="badge badge-outline badge-lg">
                  Spin Speed: 1400 rpm
                </div>
                <div className="badge badge-outline badge-lg">
                  Dimensions: {productsList[0].dimensions.height} x{' '}
                  {productsList[0].dimensions.width} x{' '}
                  {productsList[0].dimensions.depth}
                </div>
                <div class="badge badge-success badge-lg">£279.99</div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">
                    <FontAwesomeIcon icon={faShoppingCart} className="p-2" />
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-side bg-white shadow-xl">
              <figure>
                <img
                  className="object-cover h-48 w-full"
                  src="https://media.currys.biz/i/currysprod/10225997?$l-large$&fmt=auto"
                  alt="Movie"
                />
              </figure>
              <div class="card-body text-black">
                <h2 class="card-title">{productsList[0].name}</h2>
                <div className="badge badge-outline badge-lg">1400 spin</div>
                <div className="badge badge-outline badge-lg">
                  {productsList[0].dimensions.height} x{' '}
                  {productsList[0].dimensions.width} x{' '}
                  {productsList[0].dimensions.depth}
                </div>
                <div class="badge badge-success badge-lg">£279.99</div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">
                    <FontAwesomeIcon icon={faShoppingCart} className="p-2" />
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 py-5">
          <div>
            <div class="card card-side bg-white shadow-xl">
              <figure>
                <img
                  className="object-cover h-48 w-full"
                  src="https://media.currys.biz/i/currysprod/10225997?$l-large$&fmt=auto"
                  alt="Movie"
                />
              </figure>
              <div class="card-body text-black">
                <h2 class="card-title">{productsList[0].name}</h2>
                <div className="badge badge-outline badge-lg">1400 spin</div>
                <div className="badge badge-outline badge-lg">
                  {productsList[0].dimensions.height} x{' '}
                  {productsList[0].dimensions.width} x{' '}
                  {productsList[0].dimensions.depth}
                </div>
                <div class="badge badge-success badge-lg">£279.99</div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card card-side bg-white shadow-xl">
              <figure>
                <img
                  className="object-cover h-48 w-full"
                  src="https://media.currys.biz/i/currysprod/10225997?$l-large$&fmt=auto"
                  alt="Movie"
                />
              </figure>
              <div class="card-body text-black">
                <h2 class="card-title">{productsList[0].name}</h2>
                <div className="badge badge-outline badge-lg">1400 spin</div>
                <div className="badge badge-outline badge-lg">
                  {productsList[0].dimensions.height} x{' '}
                  {productsList[0].dimensions.width} x{' '}
                  {productsList[0].dimensions.depth}
                </div>
                <div class="badge badge-success badge-lg">£279.99</div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
