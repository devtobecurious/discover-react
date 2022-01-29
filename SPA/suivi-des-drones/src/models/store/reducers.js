const applicationState = {
    user: {
        isLogged: false,
        data: null
    },
    drones: {
        isLoaded: false,
        data: []
    }
};

const mainReducer = (state = applicationState, action) => {
    if (action.type === 'login') {
        state = { ...state, user : { isLogged: true, data: action.user }};
    }

    if (action.type === 'logout') {
        state = { ...state, user : { isLogged: false, data: null }};
    }

    if (action.type === 'getDrones') {
        state = { ...state, drones: { isLoaded: true, data: action.drones }};
    }

    return state;
};

export default mainReducer;