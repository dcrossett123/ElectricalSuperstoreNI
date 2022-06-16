import React from 'react';

const Carousel = () => {
  return (
    <div className="theme-black space-y-8 bg-black py-24">
      <div class="carousel carousel-center p-4 space-x-4 bg-black rounded-box">
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094"
            class="rounded-box"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
            class="rounded-box"
          />
        </div>
      </div>
      <div className="text-center">
        <button class="btn btn-outline text-lg">Show all products</button>
      </div>
    </div>
  );
};

export default Carousel;
