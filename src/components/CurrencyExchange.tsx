import React, { FC, KeyboardEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  EMPTY_STRING,
  FIRST_ELEMENT,
  ROUND_TO_TWO,
  SECOND_ELEMENT,
  SPACE,
  THIRD_ELEMENT,
} from '../constants/constants';
import { KeyBordCode } from '../enum/KeyBordCode';
import { Path } from '../enum/Path';
import { CurrencyWithKeyType } from '../redux/redux-types';
import { Nullable } from '../types';

const CurrencyExchange: FC<CurrencyExchangePropsType> = ({ valutes }) => {
  const { PressEnter } = KeyBordCode;
  const { Desk } = Path;
  const [value, setValue] = useState<string>(EMPTY_STRING);
  const [result, setResult] = useState<string>(EMPTY_STRING);
  const redirect = useNavigate();

  const strParser = (str: string): ParserReturnType => {
    const arrStr = str.split(SPACE).filter(el => el !== 'in');
    return {
      sumToExchange: arrStr[FIRST_ELEMENT],
      originalValute: arrStr[SECOND_ELEMENT],
      resultValute: arrStr[THIRD_ELEMENT],
    };
  };

  const onClickResult = (): Nullable<any> => {
    const values = strParser(value);
    let abroadCurrencyRate;

    if (valutes) {
      setResult(EMPTY_STRING);

      if (values.resultValute === 'rub') {
        abroadCurrencyRate = valutes[values.originalValute?.toUpperCase()].Value;
      } else {
        abroadCurrencyRate = valutes[values.resultValute?.toUpperCase()].Value;
      }
      const calculatedValute =
        values.originalValute === 'rub'
          ? (+Number(values.sumToExchange) / abroadCurrencyRate).toFixed(ROUND_TO_TWO)
          : (+Number(values.sumToExchange) * abroadCurrencyRate).toFixed(ROUND_TO_TWO);
      setResult(calculatedValute);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === PressEnter) {
      onClickResult();
    }
  };

  const redirectToDesk = (): void => {
    redirect(Desk);
  };

  return (
    <div className="currency">
      <h1 className="page-header">Currency exchange</h1>
      <div className="currency-names">
        <div className="fields">
          <label>
            <span>Hello! You can exchange your money here!</span>
            <input
              value={value}
              onKeyDown={e => handleKeyDown(e)}
              onChange={e => setValue(e.currentTarget.value)}
              placeholder="100 usd in rub"
            />
            <button className="see-result button" onClick={onClickResult} type="submit">
              Exchange
            </button>
            <h2 className="result">{result}</h2>
          </label>
        </div>
      </div>
      <button className="redirect button" onClick={redirectToDesk} type="button">
        DESK
      </button>
    </div>
  );
};
export default CurrencyExchange;

// --------------------types-----------
type CurrencyExchangePropsType = {
  valutes: CurrencyWithKeyType | null;
};

type ParserReturnType = {
  sumToExchange: string;
  originalValute: string;
  resultValute: string;
};
