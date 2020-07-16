import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
});

const store = createStore(reducers, composeWithDevTools());


export type AppRootStateType = ReturnType<typeof reducers>;
export default store;

// dev debugger store
// @ts-ignore
window.store = store;