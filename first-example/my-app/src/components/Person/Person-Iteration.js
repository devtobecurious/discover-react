import React, { Component } from 'react';

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
                        return <div>{ item.name }</div>
                    })
                }
            </div>
        );
    }
}

export default PersonIteration;