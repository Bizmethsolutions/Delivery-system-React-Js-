import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/container';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";
import { createBrowserHistory } from "history";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {BrowserRouter as Router} from 'react-router-dom';
import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';
import { Provider } from 'react-redux'
import store from './store'
const history = createBrowserHistory();
initializeIcons('https://my.cdn.com/path/to/icons/');
provideFluentDesignSystem().register(allComponents);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router history={history}>
        <App />
    </Router>
    </CookiesProvider>
  </Provider>
);
//store={store}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
