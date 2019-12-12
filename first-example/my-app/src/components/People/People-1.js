import React from 'react';
// import './People.css';
import styled from 'styled-components';
import mystyles from './people.module.css';
import mystyles2 from './TestAsModule.module.css';

const style = {
    backgroundColor: 'grey',
    margin: '20px'
};

const People1 = (props) => {
    let classes = ['People', 'red', 'bold'].join(' ');
    const StyledDiv = styled.div`
        border: 2px solid royalblue;
        padding: 10px;
    `;

    return (
        //<div style={ style } className={classes}>
        <StyledDiv>
            <b className={mystyles.testClass}>People ?!</b>
            <span className={mystyles2.testAsModuleClass}>{props.name}</span>
            <p>
             ?{mystyles2.testAsModuleClass} ?
                <input type="text" value={props.name} onChange={props.update}></input>
            </p>
            <p>
                <button onClick={props.delete}>Delete</button>
            </p>
        </StyledDiv>
    );
}

export default People1;