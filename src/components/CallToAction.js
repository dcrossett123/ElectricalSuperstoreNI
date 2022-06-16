import React from 'react';

const CallToAction = () => {
  return (
    <div className="theme-black space-y-8 bg-black py-16">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <p className="font-bold p-6 text-2xl">
            Call <span className="text-amber-200">07752102564</span> to get the
            best price on your appliances.
          </p>
        </div>
        <div className="basis-1/2 text-center">
          <div className="pt-6">
            <button class="btn btn-outline text-lg">Schedule now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
