import React, { Component } from 'react';
import People from '../People/People-1';

class PersonIteration extends Component {
    state = {
        people: [
            { name: 'kangourou' },
            { name: 'jenki' },
            { name: 'couwi' },
        ]
    };

    deleteOnPeople = (index) => {
        console.log(index);

        const people = this.state.people;
        people.splice(index, 1);

        this.setState({
            people: people
        });
    }

    render() {
        return (
            <div>
                <div>
                    <b>PersonConditional</b>
                </div>
                {
                    this.state.people.map((item, index) => {
                        // return <div>{ item.name }</div>
                        return <People name={item.name} delete={ this.deleteOnPeople.bind(this, index)}></People>
                    })
                }
            </div>
        );
    }
}

export default PersonIteration;