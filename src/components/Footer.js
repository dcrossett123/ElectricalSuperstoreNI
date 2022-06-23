import React, { useState } from 'react';

const Footer = () => {
  const [facebookHover, setFacebookHover] = useState(false);
  const [whatsAppHover, setWhatsAppHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/products">
          Products
        </a>
        <a className="link link-hover" href="/">
          Contact
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/ElectricalSuperStoresNI"
            onMouseOver={() => setFacebookHover(true)}
            onMouseOut={() => setFacebookHover(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={facebookHover ? 'fill-amber-200' : 'fill-current'}
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            href="https://wa.me/+447752102564"
            onMouseOver={() => setWhatsAppHover(true)}
            onMouseOut={() => setWhatsAppHover(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={whatsAppHover ? 'fill-amber-200' : 'fill-current'}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
            </svg>
          </a>
          <a
            href="/"
            onMouseOver={() => setEmailHover(true)}
            onMouseOut={() => setEmailHover(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={emailHover ? 'fill-amber-200' : 'fill-current'}
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2022 - All right reserved by
          <span className="text-amber-200">
            {' '}
            Electrical Superstores NI Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
