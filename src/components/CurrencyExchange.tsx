import React, { FC, KeyboardEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Path } from '../enum/Path';
import { CurrencyWithKeyType } from '../redux/actions';
import { Nullable } from '../types';

const CurrencyExchange: FC<CurrencyExchangePropsType> = ({ valutes }) => {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const redirect = useNavigate();

  const { Desk } = Path;

  const strParser = (str: string): ParserReturnType => {
    const arrStr = str.split(' ').filter(el => el !== 'in');
    return {
      sumToExchange: arrStr[0],
      originalValute: arrStr[1],
      resultValute: arrStr[2],
    };
  };

  const onClickResult = (): Nullable<any> => {
    const values = strParser(value);
    let abroadCurrencyRate = 0;

    if (valutes) {
      /**
       * какой тип возврата у этой функции?? надо будет потом исправить и возврат родительской ф.
       */
      const catcher = (): boolean => {
        /**
         * привести к булеву через !!
         */
        const rule0: boolean = !!(
          values.resultValute &&
          values.originalValute &&
          values.sumToExchange
        );
        const rule1: boolean = Object.keys(valutes).some(
          v => v === values.resultValute?.toUpperCase(),
        );
        const rule2: boolean = Object.keys(valutes).some(
          v => v === values.originalValute?.toUpperCase(),
        );
        const rule3: boolean = values.resultValute === 'rub';
        const rule4: boolean = values.originalValute === 'rub';
        const rule5: boolean = values.resultValute !== values.originalValute;
        return rule0 && rule5 && (rule1 || rule3) && (rule2 || rule4);
      };

      if (!catcher()) {
        /**
         * Заменить алерт Hа всплывашку
         */
        // eslint-disable-next-line
        alert('Invalid values. Try to type this:"15 usd in rub".');
        setResult('');
      } else {
        if (values.resultValute === 'rub') {
          abroadCurrencyRate = valutes[values.originalValute?.toUpperCase()].Value;
        } else {
          abroadCurrencyRate = valutes[values.resultValute?.toUpperCase()].Value;
        }

        const calculatedValute =
          values.originalValute === 'rub'
            ? (+Number(values.sumToExchange) / abroadCurrencyRate).toFixed(2)
            : (+Number(values.sumToExchange) * abroadCurrencyRate).toFixed(2);
        setResult(calculatedValute);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
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
