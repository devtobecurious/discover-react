import React from 'react';

const style = {
    backgroundColor: 'grey',
    margin: '20px'
};

const People1 = (props) => {
    let classes = ['red', 'bold'].join(' ');

    return (
        <div style={ style } className={classes}>
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