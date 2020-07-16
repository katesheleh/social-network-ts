import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById( 'root' )
);


serviceWorker.unregister();