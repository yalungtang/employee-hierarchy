
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { GET_EMPLOYEES_BY_MANAGER_ID_FULFILLED, GET_EMPLOYEES_BY_MANAGER_ID_REJECTED } from './constants';

const mergeEmployees = (fromState, newArray) => {
  const update = newArray.filter((element) => !fromState.find(stateElement => stateElement.id === element.id));
  return [...fromState, ...update]
}

const init = handleActions({
  [GET_EMPLOYEES_BY_MANAGER_ID_FULFILLED]: (state, action) => {
    const { data: employees } = action.payload;
    console.log(state.employees)
    return {
      employees: mergeEmployees(state.employees, employees),
      error: false,
      loadSuccess: true
    };
  },
  [GET_EMPLOYEES_BY_MANAGER_ID_REJECTED]: (state, action) => {
    return {
      error: true
    };
  },
}, {
  error: false,
  loadSuccess: false,
  employees: []
});

export const appReducer = combineReducers({
  init
});