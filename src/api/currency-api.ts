import axios from 'axios';

import { EMPTY_STRING } from '../constants/constants';

const BASE_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
const instance = axios.create({
  baseURL: BASE_URL,
});

export const currencyAPI = {
  getCurrency() {
    return instance.get(EMPTY_STRING);
  },
};
