import {v1} from 'uuid';
import {MessagesPageType} from '../types/types';
import dialogsReducer, {addMessageAC, updateNewMessageAC} from './dialogsReducer';

let startState: MessagesPageType;

beforeEach(() => {
	startState = {
		dialogs: [
			{id: v1(), name: 'Jain'},
			{id: v1(), name: 'Nick'},
			{id: v1(), name: 'Alex'},
		],
		messages: [
			{id: v1(), message: 'Hi! How are you?'},
			{id: v1(), message: 'I am fine! And you?'}
		],
		newMessageText: ''
	};
})

test('Message should be added', () => {
	const action = addMessageAC();
	const endState = dialogsReducer(startState, action)

	expect(endState['dialogs'].length).toBe(3)
	expect(endState['messages'].length).toBe(3)
})

test('Message should be updated', () => {
	const updatedNewMessageText = ':)';

	const action = updateNewMessageAC(updatedNewMessageText)
	const endState = dialogsReducer(startState, action)

	expect(endState['dialogs'].length).toBe(3)
	expect(endState.newMessageText).toBe(updatedNewMessageText)
	expect(endState['messages'][0].message).toBe('Hi! How are you?')
})