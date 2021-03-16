import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';


import reducers from "./reducers";
import { iProduct, iAction } from "./utils/type";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

const store: Store<iProduct, iAction> = createStore(reducers);

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
