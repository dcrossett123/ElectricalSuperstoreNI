import React from 'react';

const ContactUs = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">
            Hit us with the
            <span className="text-amber-200"> quotes.</span>
          </h1>
          <p class="py-6">
            Let us know what exactly is you are after and perhaps what you were
            <span className="text-amber-200"> quoted elsewhere.</span>
          </p>
          <p>
            We offer a
            <span className="text-amber-200"> best price guareentee </span>
            paired with
            <span className="text-amber-200"> super speedy delivery </span>
            making us the{' '}
            <span className="font-bold underline"> only option </span> for your
            appliances.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Joe Bloggs"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="joe.bloggs@gmail.com"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="07..."
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Details</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="I need a new wash machine, what can I get with £250?"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
