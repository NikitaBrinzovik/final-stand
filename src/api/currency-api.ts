import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/daily_json.js',
});

export const currencyAPI = {
  getCurrency() {
    return instance.get(``);
  },
};
