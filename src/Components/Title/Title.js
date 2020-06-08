import React from 'react';
import './Title.css'

const Title = ({title}) => {
    return ( <div className="o-container-title">
        <h1 className="o-title">{title}</h1>
    </div> );
}
 
export default Title;