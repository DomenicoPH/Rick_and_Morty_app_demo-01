/* -- store-config-1 -- 
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

export default store;
 */

// -- store-config-2 --
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;