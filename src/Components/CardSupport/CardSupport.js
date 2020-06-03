import React from 'react';
import './CardSupport.css';



const CardSupport = ({imgContact, opContact, descContact}) => {
  return (
    <div>
      <div className="card text-center o-cardS p-5">
        <div className="card-body">
          <img className="o-imgContact pb-4" src={imgContact} alt="img" />
          <h5 className="card-title">{opContact}</h5>
          <h5 className="card-text">{descContact}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardSupport;