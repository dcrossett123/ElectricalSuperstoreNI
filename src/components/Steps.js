import React from 'react';

const Steps = () => {
  return (
    <div className="theme-black space-y-8 bg-base-100 py-16 text-center">
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class="step step-accent">Find the appliance.</li>
        <li class="step step-accent">Place your order.</li>
        <li class="step step-success" data-content="✓">
          Have it delivered next day.
        </li>
      </ul>
    </div>
  );
};

export default Steps;
