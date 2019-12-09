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

    render() {
        return (
            <div>
                <div>
                    <b>PersonConditional</b>
                </div>
                {
                    this.state.people.map(item => {
                        // return <div>{ item.name }</div>
                        return <People name={item.name}></People>
                    })
                }
            </div>
        );
    }
}

export default PersonIteration;