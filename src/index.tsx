import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import state, { addPost, addMessage, updateNewPostText, subscribe } from './redux/state';
import { HashRouter } from 'react-router-dom';
import { AppStateType } from './types/index';

const rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App
          state={state}
          addPost={addPost}          
          addMessage={addMessage}
          updateNewPostText={updateNewPostText} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

serviceWorker.unregister();