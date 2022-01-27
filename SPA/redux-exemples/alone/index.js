const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        state = {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        state = {
            counter: state.counter - 1
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);


const subscriber = () => {
    const state = store.getState();

    console.log(state);
};

store.subscribe(subscriber);

const action = {
    type: 'increment'
};
store.dispatch(action);
store.dispatch(action);

action.type = 'decrement';

store.dispatch(action);
store.dispatch(action);