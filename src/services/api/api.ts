import axios from 'axios';
import generateApiHash from '../../utils/generateApiHash';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    apikey: import.meta.env.VITE_PUBLIC_KEY,
    ts: 1,
    hash: generateApiHash(),
  },
});

export default api;
