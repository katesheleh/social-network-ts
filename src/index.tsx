import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { StoreStateType } from './types/types';
import { Provider } from 'react-redux';

const rerenderEntireTree = ( state: StoreStateType ) => {
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
};

rerenderEntireTree( store.getState() );

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree( state );
} );

serviceWorker.unregister();