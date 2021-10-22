import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PokeProvider } from './context/PokeContext';
import reportWebVitals from './reportWebVitals';
import './assets/styles/root.scss';
ReactDOM.render(
  <React.StrictMode>
    <PokeProvider>
      <App />
    </PokeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
