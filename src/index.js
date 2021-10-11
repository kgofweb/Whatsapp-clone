import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer, { initialState } from './components/reducer/reducer';
import { StateProvider } from './components/stateProvider/StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      initalState={initialState}
      reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
