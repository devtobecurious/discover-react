import React, { useState } from 'react';

const PersonWithState = props => {
    const [personsState, setStateOfPersons] = useState({
        persons: [
            { name: 'chewie 1', age: 1 },
            { name: 'chewie 2', age: 2 },
            { name: 'chewie 3', age: 3 }
        ],
        propertyWillDisappear: true 
    });

    const switchNameAvecThis = () => {
        //console.log('switchName (this défini)', this);

        //> this.state.persons[0].name = 'Huhu'; // NE PAS FAIRE : Line 24:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

        setStateOfPersons({
            persons: [
                { name: 'chewie 10', age: 50 },
                { name: 'chewie 2', age: 29 },
                { name: 'chewie 3', age: 30 }
            ]
        }); // Attention ici, bien inclure toute la variable et son contenu, pas de merge
    };

    console.log('personsState::first', personsState);

    return (
        <div>
            <b>Person use state (useState)</b>
            <p>
                <button onClick={switchNameAvecThis}>Test click personUseState</button>
            </p>
            <p>
                {personsState.persons[0].name} ??
            </p>
        </div>
    );
};

export default PersonWithState;