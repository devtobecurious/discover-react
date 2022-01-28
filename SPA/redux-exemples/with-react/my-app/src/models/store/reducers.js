const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        state = {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        state = {
            counter: state.counter - 1
        }
    }

    if (action.type === 'raz') {
        state = {
            counter: 0
        }
    }

    return state;
};

export default counterReducer;