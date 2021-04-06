import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './store';
import GlobalStyles from './styles/global';
import AppContext from './store/context'
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme'
import WebFont from 'webfontloader';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

