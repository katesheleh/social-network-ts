import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi World! How are you?', likesCounter: 75 },
  { id: 2, message: 'Today is a good day!', likesCounter: 57 },
  { id: 3, message: 'Oops, I did it again!', likesCounter: 57 },
]

let dialogs = [
  { id: 1, name: 'Jnon' },
  { id: 2, name: 'Nick' },
  { id: 3, name: 'Alex' }
]

let messages = [
  { id: 1, message: 'Hi! How are you?' },
  { id: 2, message: 'I am fine! And you?' },
  { id: 3, message: 'Me too. Have a nice day!' },
  { id: 4, message: ':)' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
