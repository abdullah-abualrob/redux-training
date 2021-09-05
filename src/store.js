import { createStore } from 'redux';
import rootReducer from './reducers/index'
// import thunk from 'redux-thunk';

const initState = {};

// const middleWare = [thunk];

const store = createStore(rootReducer, initState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
