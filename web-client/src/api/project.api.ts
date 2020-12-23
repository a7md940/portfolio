import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'http://localhost:3000/project'
});

export default projectApi;