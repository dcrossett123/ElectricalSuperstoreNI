import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faCheck } from '@fortawesome/free-solid-svg-icons';

const Popular = () => {
  return (
    <div className="theme-black space-y-8 bg-black py-24">
      <h2 className="text-center shadow-xl text-5xl font-bold pb-5">
        Best <span className="text-amber-200">Sellers.</span>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div class="card w-96 bg-black shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions"></div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-black shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions"></div>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-96 bg-black shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center"></div>
      <div class="flex justify-center pt-5">
        <button class="btn btn-secondary">
          View All Products
          <FontAwesomeIcon icon={faRectangleList} className="px-2" />
        </button>
      </div>
    </div>
  );
};

export default Popular;
