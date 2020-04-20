import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

import * as serviceWorker from './serviceWorker';

const appTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
