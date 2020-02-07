import axios from 'axios';

const api = axios.create({baseURL:' https://sgd-api.herokuapp.com'}); 

export default api;