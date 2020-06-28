import {v1} from 'uuid'
import {AddPostACType, ProfilePageType, ProfileReducersActionType, UpdateNewPostTextACType} from '../types/types'

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
	posts: [
		{id: v1(), message: 'Hi World! How are you?', likesCounter: 75},
		{id: v1(), message: 'Today is a good day!', likesCounter: 57},
	],
	newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionType) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {id: v1(), message: state.newPostText, likesCounter: 0};
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ''
			}

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		default:
			return state
	}
}

export const addPostAC = (): AddPostACType => {
	return ({type: ADD_POST})
}
export const updateNewPostTextAC = (text: string): UpdateNewPostTextACType => {
	return ({type: UPDATE_NEW_POST_TEXT, newText: text})
}


export default profileReducer;