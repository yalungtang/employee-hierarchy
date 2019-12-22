
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { appReducer } from './reducers';

let middleware = [thunk, promiseMiddleware];
let glob = typeof window !== "undefined" ? window : global;
const devToolsExtension = glob.devToolsExtension;

export default createStore(
  appReducer,
  compose(applyMiddleware(...middleware),
    devToolsExtension ? devToolsExtension() : f => f
  ));
  