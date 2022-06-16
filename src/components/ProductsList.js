import React from 'react';

const ProductsList = () => {
  return (
    <div>
      <label for="my-modal-3" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold pb-6">Let's refine your search.</h3>
          <select class="select select-accent w-full max-w-xs">
            <option disabled selected>
              Type of Appliance?
            </option>
            <option>Washing Machine</option>
            <option>Tumble Dryer</option>
            <option>Fridge Freezer</option>
            <option>Cooker</option>
            <option>TV</option>
            <option>Dishwasher</option>
          </select>
          <div className="pt-6">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
