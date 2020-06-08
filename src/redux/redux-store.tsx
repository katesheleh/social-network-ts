import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";

const reducers = combineReducers( {
  profilePage: profileReducer,
  messagesPage: dialogsReducer
} );
const store = createStore( reducers );


export type StateType = typeof store;
export default store;