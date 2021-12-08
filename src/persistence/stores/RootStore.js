/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AuthReducer} from '../reducers/AuthReducer';

const allReducers = combineReducers({
  AuthReducer
});

const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware),
);

export default applicationStore;
