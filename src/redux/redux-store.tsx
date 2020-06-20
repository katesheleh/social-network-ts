import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer
});
const store = createStore(reducers);


export type StateType = typeof store;
export default store;