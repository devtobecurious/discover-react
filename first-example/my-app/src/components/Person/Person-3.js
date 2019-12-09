import React, { Component } from 'react';

export default class Person3 extends Component {
    render() {
        return (
        <p>
            I'm person 3 {this.props.name}
        </p>
        );
    }
}