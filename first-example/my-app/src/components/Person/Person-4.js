import React from 'react';

const person4 = (props) => {
    return (
        <div>
            <b>4 : { Math.floor(Math.random() * 100) }</b>
            <p>=> Hi I'm {props.name}, with age : {props.age}</p>
            <span>1. {props.children} 2.</span>
            FIN
        </div>
    );
};

export default person4;