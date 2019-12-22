import { createActions } from 'redux-actions';
import { LOGIN } from './constants';
import { loginService } from './services';

export const { login } = createActions(LOGIN);

export const dispatchLogin = (payload, callback) => {
    return dispatch => dispatch(login(loginService(payload))).catch(
        callback
    );
};
