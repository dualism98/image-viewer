import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    Authorization: `${Config.API_CLIENT_ID} ${Config.API_ACCESS_KEY}`,
  },
});

export default axiosInstance;
