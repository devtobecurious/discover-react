import React, { Component } from 'react';
import styled from 'styled-components';

import Person from '../Person/Person';
import Person2 from '../Person/Person-2';
import Person3 from '../Person/Person-3';
import Person4 from '../Person/Person-4';
import PersonOutput1 from '../Person/Person-5-output';
import PersonBanana from '../Person/Person-6-two-way';
import PersonalConditional from '../Person/Person-Conditional';
import PersonIteration from '../Person/Person-Iteration';
import PersonUseState from '../Person/Person-UseState';
import PersonWithInlineStyle from '../Person/Person-WithInlineStyle';
import './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


// import '../Person/Person.css';

const StyledButton = styled.button`
  color: ${props => props.defaultColor};
  font: inherit;
  border: 2px solid blue;
  padding: 8px;

  &:hover {
    color: black;
    background-color: yellow;
  }
`;

class App extends Component {
  state = {
    persons: [
      { name: 'chewie 1', age: 28 },
      { name: 'chewie 2', age: 29 },
      { name: 'chewie 3', age: 30 }
    ],
    propertyWillDisappear: false,
    showPersons: true
  };

  switchName() {
    console.log('switchName (this pas défini !)', this);
  }

  switchNameAvecThis = (newName) => {
    console.log('switchName (this défini)', this.state);

    //> this.state.persons[0].name = 'Huhu'; // NE PAS FAIRE : Line 24:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: 'chewie 2', age: 29 },
        { name: 'chewie 3', age: 30 }
      ]
    })
  }

  showHidePersons = () => {
    this.setState({
      showPersons: ! this.state.showPersons
    })
  }

  nameChangedHandler = (event) => {
    console.log('changed :');
    this.setState({
      persons: [
        { name: event.target.value, age: 200 },
        { name: 'chewie 2', age: 29 },
        { name: 'chewie 3', age: 30 }
      ]
    })
  }

  render() {
    const isThrownError = Math.random(0, 1) > 0.7;

    if (isThrownError) {
      throw new Error('Big up !');
    }

    return (
        <ErrorBoundary>
          <div className="App">
          <h1>{Math.floor(Math.random() * 100)}</h1>
          <p>
            Working !
          </p>
          <StyledButton defaultColor='red' onClick={this.switchName}>Switch name</StyledButton>
          <StyledButton onClick={this.switchNameAvecThis.bind(this, 'aloha')}>Switch name avec this</StyledButton>

          <button onClick={this.showHidePersons}>Switch show</button>
          {
            this.state.showPersons ? 
            <div>
            <Person />
            <Person></Person>
            <Person2 age={this.state.persons[0].age} name={this.state.persons[0].name}></Person2>
            <Person3 age="28" name="chewie"></Person3>
            <Person4 age="29" name="chewie">
              test children ! <Person4>tests sous children</Person4>
            </Person4>
            <Person4 age="500" name="chewie">
            </Person4>
            <PersonUseState></PersonUseState>
            <PersonOutput1 click={() => this.switchNameAvecThis('alors ?')}></PersonOutput1>
            <PersonBanana name="kikoo" changed={this.nameChangedHandler}></PersonBanana>
            <PersonWithInlineStyle></PersonWithInlineStyle>
          </div> : null
          }
          <PersonalConditional></PersonalConditional>
          <PersonIteration></PersonIteration>
        </div>
      </ErrorBoundary>
    );
  }

}

export default App;
