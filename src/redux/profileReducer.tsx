import {v1} from 'uuid'
import {
	AddPostACType,
	ProfilePageType,
	ProfileReducersActionType,
	ProfileType,
	SetUserProfileType,
	UpdateNewPostTextACType
} from '../types/types'
import {Dispatch} from 'react';
import {profileAPI} from '../api/api';

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

let userProfile: ProfileType = {
	userId: 1,
	lookingForAJob: false,
	lookingForAJobDescription: '',
	fullName: '',
	aboutMe: '',
	contacts: {
		github: '',
		vk: '',
		facebook: '',
		instagram: '',
		twitter: '',
		website: '',
		youtube: '',
		mainLink: ''
	},
	photos: {
		small: '123.png',
		large: 'null.jpg'
	}
};

const initialState = {
	posts: [
		{id: v1(), message: 'Hi World! How are you?', likesCounter: 75},
		{id: v1(), message: 'Today is a good day!', likesCounter: 57},
	],
	newPostText: '',
	profile: userProfile
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

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
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

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
	return ({type: SET_USER_PROFILE, profile: profile})
}

export const setUserProfileThunkCreator = (userId: string) => {
	return (
			(dispatch: Dispatch<SetUserProfileType>) => {
				profileAPI.getUser(userId).then(response => {
					dispatch(setUserProfile(response.data))
				})
			}
	)
}


export default profileReducer;