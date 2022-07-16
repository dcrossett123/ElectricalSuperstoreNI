import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cnfiz88',
        'template_5o4p4rx',
        form.current,
        'R507m1rqVMFZEdQsQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div class="hero min-h-screen bg-base-100">
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
            <form ref={form} onSubmit={sendEmail}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Joe Bloggs"
                  class="input input-bordered"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="user_email"
                  placeholder="joe.bloggs@gmail.com"
                  class="input input-bordered"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="user_phone"
                  placeholder="07..."
                  class="input input-bordered"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Details</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  name="message"
                  placeholder="I need a new wash machine, what can I get with £250?"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <input type="submit" class="btn btn-primary" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
