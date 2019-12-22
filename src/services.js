import axios from 'axios';

const routes = {
    base: 'https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api'
};

export const getEmployeesByManagerId = (id) => {
    return axios.get(`${routes.base}?manager=${id}`)
};
