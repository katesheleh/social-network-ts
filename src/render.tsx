import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { addPost, addMessage, StateType, updateNewPostText } from './redux/state';
import { HashRouter } from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>      
        <App
          state={state}
          addPost={addPost}
          updateNewPostText = {updateNewPostText}
          addMessage={addMessage} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
