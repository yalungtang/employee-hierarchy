import { createActions } from 'redux-actions';
import { GET_EMPLOYEES_BY_MANAGER_ID } from './constants';
import { getEmployeesByManagerId as getEmployeesByManagerIdApi } from './services';

export const { getEmployeesByManagerId } = createActions(GET_EMPLOYEES_BY_MANAGER_ID);

export const dispatchGetEmployeesByManager = (id) => {
    return dispatch => {
        dispatch(getEmployeesByManagerId(getEmployeesByManagerIdApi(id)))
    }
};
