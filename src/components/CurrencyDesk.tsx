import React from 'react';

// test
import { useNavigate } from 'react-router-dom';

import { ROUND_TO_TWO } from '../constants/constants';
import { Path } from '../enum/Path';
import { CurrencyWithKeyType } from '../redux/actions';

const CurrencyDesk: React.FC<CurrencyExchangePropsType> = ({ valutes }) => {
  const { Home } = Path;
  const redirect = useNavigate();
  const redirectToExchange = (): void => {
    redirect(Home);
  };

  const allValutes = valutes || {};
  const mapedCurrencies = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const val in allValutes) {
    const { Name, Value } = allValutes[val];
    mapedCurrencies.push(
      <li key={Name}>
        {val} : <span>{Value.toFixed(ROUND_TO_TWO)} RUB</span>
      </li>,
    );
  }

  return (
    <div className="currency">
      <h1 className="page-header">Currency Desk</h1>
      <div className="currency-names currency-list">
        <ul>{mapedCurrencies}</ul>
      </div>
      <button className="redirect button" onClick={redirectToExchange} type="button">
        EXCHANGE
      </button>
    </div>
  );
};
export default CurrencyDesk;

// -----------type-------
type CurrencyExchangePropsType = {
  valutes: CurrencyWithKeyType | null;
};
