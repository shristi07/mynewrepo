import React from 'react';
import './Button.css';

const Button = ()=>{
    return(
        <div className="buttonContainer">
            <button className="Next">NEXT</button>
            <button className="Cancel">CANCEL</button>
        </div>
    );
}

export default Button;