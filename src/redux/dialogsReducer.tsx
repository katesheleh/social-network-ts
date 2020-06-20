import {v1} from "uuid";
import {DialogsReducersActionType, MessagesPageType} from "../types/types";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
	dialogs: [
		{id: v1(), name: "Jain"},
		{id: v1(), name: "Nick"},
		{id: v1(), name: "Alex"},
	],
	messages: [
		{id: v1(), message: "Hi! How are you?"},
		{id: v1(), message: "I am fine! And you?"},
		{id: v1(), message: "Me too. Have a nice day!"},
		{id: v1(), message: ":)"},
	],
	newMessageText: ""
};

const dialogsReducer = (state: MessagesPageType = initialState, action: DialogsReducersActionType) => {
	switch (action.type) {

		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: v1(), message: state.newMessageText}],
				newMessageText: ''
			};

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			};

		default:
			return state;
	}
};

export const addMessageActionCreator = () => {
	return (
			{type: ADD_MESSAGE}
	);
};

export const updateNewMessageActionCreator = (text: string) => {
	return (
			{type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
	);
};

export default dialogsReducer;