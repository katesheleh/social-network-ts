import {v1} from 'uuid';
import {MessageType} from '../components/Dialogs/Message/Message';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export type AddMessageACType = {
	type: typeof ADD_MESSAGE
	newMessageBody: string
}


export type DialogsReducersActionType = AddMessageACType;

export type MessagesPageType = {
	dialogs: Array<DialogItemType>
	messages: Array<MessageType>
}

const initialState = {
	dialogs: [
		{id: v1(), name: 'Jain'},
		{id: v1(), name: 'Nick'},
		{id: v1(), name: 'Alex'},
	],
	messages: [
		{id: v1(), message: 'Hi! How are you?'},
		{id: v1(), message: 'I am fine! And you?'},
		{id: v1(), message: 'Me too. Have a nice day!'},
		{id: v1(), message: ':)'},
	]
}

const dialogsReducer = (state: MessagesPageType = initialState, action: DialogsReducersActionType) => {
	switch (action.type) {

		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: v1(), message: action.newMessageBody}]
			}


		default:
			return state
	}
}

export const addMessageAC = (newMessageBody: string): AddMessageACType => {
	return (
			{type: ADD_MESSAGE, newMessageBody}
	)
}

export default dialogsReducer;