import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './redux/state';
import { HashRouter } from 'react-router-dom';
//import { AppStateType } from './types/index';


const rerenderEntireTree = (state: any) => { // StateType  
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)}          
          addMessage={store.addMessage.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)

serviceWorker.unregister();