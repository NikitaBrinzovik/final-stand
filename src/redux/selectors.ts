import { CurrencyWithKeyType } from './redux-types';
import { GlobalState } from './state';

export const selectValutes = (state: GlobalState): CurrencyWithKeyType | null =>
  state.currency.valutes;
