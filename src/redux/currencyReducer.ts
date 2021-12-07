import { ACTIONS_TYPE } from '../enum/action-types';

import { CurrencyReducersTypes, InitialStateType } from './redux-types';

const { SET_CURRENCY } = ACTIONS_TYPE;
const initialState: InitialStateType = {
  valutes: null,
};

export const currencyReducer = (
  action: CurrencyReducersTypes,
  state = initialState,
): InitialStateType => {
  switch (action?.type) {
    case SET_CURRENCY: {
      return {
        ...state,
        valutes: action.payload.valutes,
      };
    }
    default:
      return state;
  }
};
