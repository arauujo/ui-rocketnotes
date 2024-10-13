import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-rocketnotes-0hb3.onrender.com',
});
