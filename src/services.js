import axios from 'axios';

const routes = {
    login: 'http://localhost:9000/login'
};

export const loginService = (payload) => {
    return axios.post(routes.login, payload)
};
