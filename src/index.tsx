import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './context';
import GlobalStyles from './styles/global';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme'
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
