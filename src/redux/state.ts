import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import { currencyReducer } from './currencyReducer';
import { CurrencyReducersTypes } from './redux-types';

const reducers = combineReducers({
  currency: currencyReducer,
});

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  CurrencyReducersTypes
>;

export type GlobalState = ReturnType<typeof reducers>;
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
