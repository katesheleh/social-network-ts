import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppRootStateType = ReturnType<typeof reducers>;
export default store;

// dev debugger store
// @ts-ignore
window.store = store;