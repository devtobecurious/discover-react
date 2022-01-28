import { createStore } from 'redux';

import counterReducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(counterReducer, devToolsEnhancer());

export default store;