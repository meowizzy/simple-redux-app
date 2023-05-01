import { combineReducers, createStore } from 'redux';
import cashReducer from './reducers/cashReducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
     cashReducer,
     customerReducer
});

const store = createStore(rootReducer);


export default store;