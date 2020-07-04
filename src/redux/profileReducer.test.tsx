import {v1} from 'uuid';
import profileReducer, {addPostAC, updateNewPostTextAC} from './profileReducer';
import {ProfilePageType} from '../types/types';


let startState: ProfilePageType;

beforeEach(() => {
	startState = {
		posts: [
			{id: v1(), message: 'Hi World! How are you?', likesCounter: 75},
			{id: v1(), message: 'Today is a good day!', likesCounter: 57},
		],
		newPostText: '',
	};
})

test('Post should be added', () => {
	const action = addPostAC()
	const endState = profileReducer(startState, action)

	expect(endState['posts'].length).toBe(3)
	expect(endState.newPostText).toEqual(startState.newPostText)
})


test('Post should be updated', () => {
	const newPostMessage = 'Have a nice day :)'

	const action = updateNewPostTextAC(newPostMessage)
	const endState = profileReducer(startState, action)

	expect(endState['posts'].length).toBe(2)
	expect(endState.newPostText).toEqual(newPostMessage)
})