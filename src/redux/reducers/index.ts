import {combineReducers} from 'redux';
import app from './app-reducer';

const appReducer = combineReducers(
  Object.assign({
    app,
  }),
);

export default appReducer;
