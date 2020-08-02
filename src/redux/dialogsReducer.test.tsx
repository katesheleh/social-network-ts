import {v1} from 'uuid';
import dialogsReducer, {addMessageAC, MessagesPageType} from './dialogsReducer';

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
		]
	};
})

test('Message should be added', () => {
	const action = addMessageAC('test');
	const endState = dialogsReducer(startState, action)

	expect(endState['dialogs'].length).toBe(3)
	expect(endState['messages'].length).toBe(3)
})