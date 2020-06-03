import React from 'react';
import Split from "../SplitButton/splitButton";
import "./options.css";

const Option = ({name, options}) => {
    return ( <div className="o-container-option">
        <h3 className="o-name">{name}</h3>
        <Split options={options}/>
    </div> );
}
 
export default Option;