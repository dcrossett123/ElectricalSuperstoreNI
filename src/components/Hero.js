import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-7xl font-bold">
            Appliances but <span className="text-amber-200">cheaper.</span>
          </h1>
          <div className="p-5">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="text-center text-lg">Price match guareentee</span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-accent"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="text-center text-lg">
                  Same or next day delivery
                </span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-accent"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="text-center text-lg">
                  Unbeatable customer service
                </span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-accent"
                />
              </label>
            </div>
          </div>
          <button class="btn btn-secondary">
            <FontAwesomeIcon icon={faArrowDown} className="px-2" />
            Tell me more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
