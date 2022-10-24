export const isToken = () => localStorage.getItem('token');

export const setToken = (token) => localStorage.setItem('token', JSON.stringify(token));