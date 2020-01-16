import React, { Component } from 'react';
import People from '../people/people';

class PeopleList extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('People::getDerivedStateFromProps', state);
    //     return state;
    // }

    componentWillReceiveProps(nextProps) {
        console.log('People::componentWillReceiveProps::nextProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('People::shouldComponentUpdate', nextProps);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('People::getSnapshotBeforeUpdate', prevProps);

        return { message: 'snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('People::componentDidUpdate', prevProps, prevState, snapshot);
    };
    

    render() {
        console.log('PeopleList::render', this.props);

        return this.props.persons.map((value, index) => {
            console.log('PeopleList:map', value);
            return <People key={value.id} name={value.name} changed={event => this.props.changed(event, value.id)}></People>;
        });
    }
};

export default PeopleList;