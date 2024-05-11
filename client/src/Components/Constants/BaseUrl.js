import axios from 'axios';

const axiosInstance = axios.create({

  //server api


//local api

//   baseURL: 'http://localhost:4005/emedicals_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance