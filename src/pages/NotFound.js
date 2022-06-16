import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-5xl text-center font-bold p-24">
        <span className="text-amber-200">Opps!</span> Looks like we are lost.
        <br />
        <br />
        Lets get back on track...
      </h1>
      <button className="btn btn-accent text-lg">
        <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
        Take me back
      </button>
    </div>
  );
};

export default NotFound;
