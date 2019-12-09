import React from 'react';
import './Person.css';

const person = () => {

    return (
        <div className="Person">
            <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years!</p>
        </div>
    );
};

export default person;
