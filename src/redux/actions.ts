export enum ACTIONS_TYPE {
  SET_CURRENCY = 'SET_CURRENCY',
  SET_APP_STATUS = 'SET_APP_STATUS',
  SET_ERROR = 'SET_ERROR',
}

// ---------------------AC--------------
export const setCurrency: SetCurrencyType = valutes => ({
  type: ACTIONS_TYPE.SET_CURRENCY,
  payload: { valutes },
});
export const setAppStatusAC: SetAppStatusActionType = status => ({
  type: ACTIONS_TYPE.SET_APP_STATUS,
  payload: { status },
});
export const setAppErrorAC: SetAppErrorActionType = error => ({
  type: ACTIONS_TYPE.SET_ERROR,
  payload: { error },
});

// ---------------------types-------------
export type CurrencyWithKeyType = {
  [currencies: string]: CurrencyType;
};
export type CurrencyType = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type ErrorType = null | string;
export type SetCurrencyType = (valutes: CurrencyWithKeyType | null) => {
  type: ACTIONS_TYPE.SET_CURRENCY;
  payload: { valutes: CurrencyWithKeyType | null };
};
export type SetAppStatusActionType = (status: RequestStatusType) => {
  type: ACTIONS_TYPE.SET_APP_STATUS;
  payload: { status: RequestStatusType };
};
export type SetAppErrorActionType = (error: ErrorType) => {
  type: ACTIONS_TYPE.SET_ERROR;
  payload: { error: ErrorType };
};

export type CurrencyReducersTypes =
  | ReturnType<SetAppStatusActionType>
  | ReturnType<SetCurrencyType>
  | ReturnType<SetAppErrorActionType>;
