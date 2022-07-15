import React from 'react';

const Carousel = () => {
  return (
    <div className="theme-black space-y-8 bg-black py-24">
      <div class="carousel carousel-center p-4 space-x-4 bg-black rounded-box">
        <div class="carousel-item">
          <img
            src="https://rayleighdomesticappliances.co.uk/wp-content/uploads/2017/09/hotpoint-logo.jpg"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://3axis.co/user-images/51rw0d76.png"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="http://lofrev.net/wp-content/photos/2016/06/lg-logo-1.jpg"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://getvectorlogo.com/wp-content/uploads/2020/04/indesit-vector-logo.png"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.grayportalicmimarlik.com/wp-content/uploads/2020/08/bosch-staj-defteri1.gif"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/03/hoover-vector-logo.png"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032018/untitled-1_400.png?iuUalf39at9FowbZWmoOeC97bnwfR.4g&itok=oxqZu7-8"
            className="rounded-box h-44 w-60"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.quickappliancerepair.ca/wp-content/uploads/2013/11/brand-logos-miele.jpg"
            className="rounded-box h-44 w-60"
          />
        </div>
      </div>
      <div className="text-center">
        <button class="btn btn-outline text-lg">
          <a href="/products">Show all products</a>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
