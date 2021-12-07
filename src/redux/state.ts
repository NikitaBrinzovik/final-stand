import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import { CurrencyReducersTypes } from './actions';
import { currencyReducer } from './currencyReducer';

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
