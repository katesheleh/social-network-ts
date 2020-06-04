import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './redux/state';
import { HashRouter } from 'react-router-dom';


const rerenderEntireTree = ( state: any ) => { // rerenderEntireTreeType 
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App
          state={ store.getState() }
          dispatch={ store.dispatch.bind( store ) }
        />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById( 'root' )
  );
};

rerenderEntireTree( store.getState );
store.subscribe( rerenderEntireTree );

serviceWorker.unregister();