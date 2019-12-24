import React, { Component } from 'react';

import './App.css';
import PeopleList from '../../components/peoples/list/people-list';
import CockPit from '../../components/cockpit/cockpit';

class App extends Component {
  state = {
    people: [
      { name: 'Chewie' },
      { name: 'Luke' },
    ]
  };

  render() {
    
    return (
      <div>
        <h1>{this.props.title}</h1>
        <CockPit></CockPit>
        <PeopleList persons={this.state.people}></PeopleList>

      </div>
    );
  }
}

export default App;
