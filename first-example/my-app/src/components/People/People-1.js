import Radium, { StyleRoot } from 'radium';
import React from 'react';
import './People.css';

const style = {
    backgroundColor: 'grey',
    margin: '20px',
    ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
    },
    '@media max-width: 750px)': {
        backgroundColor: 'yelllow'
    }
};

const People1 = (props) => {
    let classes = ['People', 'red', 'bold'].join(' ');

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

export default Radium(People1);