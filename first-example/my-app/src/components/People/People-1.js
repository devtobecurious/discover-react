import React from 'react';

const style = {
    backgroundColor: 'grey',
    margin: '20px'
};

const People1 = (props) => {
    return (
        <div style={ style }>
            <b>People !</b>
            <span>{props.name}</span>
            <p>
                <input type="text" value={props.name} onChange={props.update}></input>
            </p>
            <p>
                <button onClick={props.delete}>Delete</button>
            </p>
        </div>
    );
}

export default People1;