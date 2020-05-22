import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { addPost, addMessage, StateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>      
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
