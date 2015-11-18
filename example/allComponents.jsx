import React from 'react';
import ReactDOM from 'react-dom';
import Reui from '../src/Reui';
import MainPage from './MainPage';

import theme from '../theme';
import './global.css';

Reui.setGlobalTheme(theme);

ReactDOM.render(
  <MainPage />,
  document.getElementById('app-container')
);
