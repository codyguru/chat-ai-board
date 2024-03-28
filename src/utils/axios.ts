import axios from 'axios';
import { HOST_API_ROUTE, HOST_API_PORT } from 'constants/config.ts';

const axiosInstance = axios.create({ baseURL: `${HOST_API_ROUTE}:${HOST_API_PORT}` });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
