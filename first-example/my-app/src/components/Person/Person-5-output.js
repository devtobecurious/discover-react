import React from 'react';

const PersonOutput = (props) => {
    return (
        <div>
           <b>Person 5 Output</b>
           <button onClick={props.click}>Clikaille</button>
        </div>
    );
};

export default PersonOutput;