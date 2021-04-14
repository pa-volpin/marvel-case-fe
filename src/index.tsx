import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './state';
import './index.css';
import App from './App';
import history from './state/History';
import FloatBox from './design-system/components/FloatBox/FloatBox';


const initialState = (window as any).initialReduxState
const store = configureStore(initialState)

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
      <FloatBox />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
