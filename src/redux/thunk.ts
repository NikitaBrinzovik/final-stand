import { AxiosError } from 'axios';

import { currencyAPI } from '../api/currency-api';

import { setAppErrorAC, setAppStatusAC, setCurrency } from './actions';
import { AppThunkType } from './state';

export const getCurrencyTC = (): AppThunkType => dispatch => {
  dispatch(setAppStatusAC('loading'));
  currencyAPI
    .getCurrency()
    .then(res => {
      dispatch(setCurrency({ usd: res.data.Valute.USD, eur: res.data.Valute.EUR }));
      // dispatch(setCurrency(res.data.Valute));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch((err: AxiosError) => {
      dispatch(setAppErrorAC(err.message));
      dispatch(setAppStatusAC('failed'));
    });
};
