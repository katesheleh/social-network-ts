import { rerenderEntireTree } from './render';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

rerenderEntireTree(state)
serviceWorker.unregister();