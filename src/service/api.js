import axios from 'axios';

const apiService = axios.create ({baseURL: 'https://api.github.com'});

export default apiService;
