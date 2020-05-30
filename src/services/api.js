import axios from 'axios';

export default axios.create({
  baseURL: 'http://cityhack.westeurope.cloudapp.azure.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
