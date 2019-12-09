import React from 'react';

const PersonTwoWay = (props) => {
    return (
        <div>
           <b>Person 6 Two way</b>
           <button onClick={props.click}>Click et click oh yeah</button>
           <input type="text" onChange={props.changed}></input>
        </div>
    );
};

export default PersonTwoWay;