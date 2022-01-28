const initialState = {counter: 0, show: true};

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increase') {
        state = {
            ...state,
            counter: state.counter + action.value
        }
    }

    if (action.type === 'decrement') {
        state = {
            ...state,
            counter: state.counter - 1
        }
    }

    if (action.type === 'raz') {
        state = {
            ...state,
            counter: 0
        }
    }

    if (action.type === 'toggle') {
        state = {
            ...state,
            show: ! state.show
        }
    }

    return state;
};

export default counterReducer;