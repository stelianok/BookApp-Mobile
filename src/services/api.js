import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example-node-api17.herokuapp.com',
});

export default api;
