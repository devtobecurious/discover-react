import React from 'react';

const People1 = (props) => {
    return (
        <div>
            <b>People !</b>
            <span>{props.name}</span>
            <p>
                <button onClick={props.delete}>Delete</button>
            </p>
        </div>
    );
}

export default People1;