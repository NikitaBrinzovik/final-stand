import { ACTIONS_TYPE } from '../enum/action-types';

import {
  SetAppErrorActionType,
  SetAppStatusActionType,
  SetCurrencyType,
} from './redux-types';

const { SET_CURRENCY, SET_APP_STATUS, SET_ERROR } = ACTIONS_TYPE;

// ---------------------AC--------------
export const setCurrency: SetCurrencyType = valutes => ({
  type: SET_CURRENCY,
  payload: { valutes },
});
export const setAppStatusAC: SetAppStatusActionType = status => ({
  type: SET_APP_STATUS,
  payload: { status },
});
export const setAppErrorAC: SetAppErrorActionType = error => ({
  type: SET_ERROR,
  payload: { error },
});
