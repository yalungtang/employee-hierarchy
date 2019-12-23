
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { GET_EMPLOYEES_BY_MANAGER_ID_FULFILLED,
  GET_EMPLOYEES_BY_MANAGER_ID_REJECTED,
  GET_EMPLOYEES_BY_MANAGER_ID_PENDING
} from './constants';

const mergeEmployees = (fromState, newArray) => {
  const update = newArray.filter((element) => !fromState.find(stateElement => stateElement.id === element.id));
  return [...fromState, ...update]
}

const init = handleActions({
  [GET_EMPLOYEES_BY_MANAGER_ID_FULFILLED]: (state, action) => {
    const { data: employees } = action.payload;
    return {
      employees: mergeEmployees(state.employees, employees),
      error: false,
      isLoading: false
    };
  },
  [GET_EMPLOYEES_BY_MANAGER_ID_REJECTED]: (state, _action) => {
    return {
      ...state,
      error: true,
      isLoading: false
    };
  },
  [GET_EMPLOYEES_BY_MANAGER_ID_PENDING]: (state, _action) => {
    return {
      ...state,
      error: false,
      isLoading: true
    };
  },
}, {
  error: false,
  isLoading: false,
  employees: [],
  notManagerIds: []
});

export const appReducer = combineReducers({
  init
});