import React, { Component } from 'react';

import './App.css';
import PeopleList from '../../components/peoples/list/people-list';
import CockPit from '../../components/cockpit/cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App::constructor :', props);
  }

  state = {
    people: [
      { id: 1, name: 'Chewie' },
      { id: 2, name: 'Luke' },
    ]
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App::getDerivedStateFromProps :', state, props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App::shouldComponentUpdate', nextProps);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('App::componentDidUpdate', prevProps, prevState, snapshot);
  };

  updatePeople(event, id) {
    console.log('App::updatePeople::id :', id);

    const personIndex = this.state.people.findIndex(item => item.id === id);
    const newPerson = { ...this.state.people[personIndex] };

    newPerson.name = event.target.value;

    const newPersons = [...this.state.people];
    newPersons[personIndex] = newPerson;

    this.setState({
      people: newPersons
    });
  }

  componentDidMount() {
    console.log('App::componentDidMount');
  }

  render() {
    console.log('App::render');
    return (
      <div>
        <h1>{this.props.title}</h1>
        <CockPit></CockPit>
        <PeopleList persons={this.state.people} changed={this.updatePeople.bind(this)}></PeopleList>

      </div>
    );
  }
}

export default App;
