
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { LOGIN_FULFILLED, LOGIN_REJECTED } from './constants';


const token = handleActions({
  [LOGIN_FULFILLED]: (_state, action) => {
    const { payload: { data: { token } } } = action;
    return {
      token
    };
  },
  [LOGIN_REJECTED]: (state, action) => {
    const { error } = action;
    return {
      error
    };
  },
}, { token: "" });

export const appReducer = combineReducers({
  token
});