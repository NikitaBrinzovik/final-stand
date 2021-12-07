import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import './styles/App.css';
import CurrencyDesk from './components/CurrencyDesk';
import CurrencyExchange2 from './components/CurrencyExchange2';
import { CurrencyContainer } from './container/CurrencyExchangeContainer';
import { Path } from './enum/Path';
import reportWebVitals from './reportWebVitals';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => {
  const { Home, Other, Desk } = Path;

  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route
            path={Home}
            element={<CurrencyContainer UniversalComponent={CurrencyExchange2} />}
          />
          <Route
            path={Desk}
            element={<CurrencyContainer UniversalComponent={CurrencyDesk} />}
          />
          <Route
            path={Other}
            element={<h1 className="invalid-path">404 page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};
reportWebVitals();
