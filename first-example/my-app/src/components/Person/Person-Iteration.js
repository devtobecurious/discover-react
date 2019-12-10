import React, { Component } from 'react';
import People from '../People/People-1';

class PersonIteration extends Component {
    state = {
        people: [
            { key: 1, name: 'kangourou' },
            { key: 10, name: 'jenki' },
            { key: 58, name: 'couwi' },
        ]
    };

    deleteOnPeople = (index) => {
        console.log(index);

        const people = [...this.state.people];
        people.splice(index, 1);

        this.setState({
            people: people
        });
    }

    updateOnPeople = (event, personKey) => {
        console.log('personKey', personKey);
        console.log('event', event);

        //const onePeople = { ...this.state.people.find(item => item.key === personKey) };
        const peopleIndex = this.state.people.findIndex(item => item.key === personKey);
        const newOnePeople = {...this.state.people[peopleIndex]};

        newOnePeople.name = event.target.value;

        const newPeople = [...this.state.people];
        newPeople[peopleIndex] = newOnePeople;

        this.setState({
            people: newPeople
        });
    }

    render() {
        const style = {
            display: 'flex'
        };

        return (
            <div style={style}>
                <div>
                    <b>PersonConditional</b>
                </div>
                {
                    this.state.people.map((item, index) => {
                        // return <div>{ item.name }</div>
                        return <People name={item.name} 
                                       delete={ this.deleteOnPeople.bind(this, index)} 
                                       update={ (event) => this.updateOnPeople(event, item.key) }
                                       key={item.key}></People>
                    })
                }
            </div>
        );
    }
}

export default PersonIteration;