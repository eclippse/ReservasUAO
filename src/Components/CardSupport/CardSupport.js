import React from 'react';
import '../../Pages/Content.css'
import '../../Pages/Support/Support.css';



const CardSupport = ({imgContact, opContact, descContact}) => {
  return (
    <div>
      <div className="o-container-card">
        <div className="card-body">
          <div className="o-container-image">
          <img className="o-imgContact" src={imgContact} alt="img" />
          </div>
          <h6 className="o-card-title">{opContact}</h6>
          <h5 className="o-card-text">{descContact}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardSupport;