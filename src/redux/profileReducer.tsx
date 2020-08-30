import {v1} from 'uuid'
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {PostType} from '../components/Profile/MyPosts/MyPosts';
import {ResultCodeStatus} from '../types/types';
import {AppRootStateType} from './redux-store';
import {stopSubmit} from 'redux-form';

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const SAVE_PHOTO = 'SAVE_PHOTO'


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
		small: '',
		large: ''
	}
}

const initialState = {
	posts: [
		{id: v1(), message: 'Hi World! How are you?', likesCounter: 75},
		{id: v1(), message: 'Today is a good day!', likesCounter: 57},
	],
	profile: userProfile,
	status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducersActionType) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {id: v1(), message: action.newPostBody, likesCounter: 0};
			return {
				...state,
				posts: [newPost, ...state.posts]
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status
			}

		case SAVE_PHOTO:
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}

		default:
			return state
	}
}

export const addPostAC = (newPostBody: string): AddPostACType => {
	return ({type: ADD_POST, newPostBody})
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
	return ({type: SET_USER_PROFILE, profile})
}

export const setStatus = (status: string): SetStatusType => {
	return ({type: SET_STATUS, status})
}

export const savePhotoAC = (photos: PhotosType): SavePhotoType => {
	return ({type: SAVE_PHOTO, photos})
}


// thunk
export const setUserProfileTC = (userId: string) => {
	return (
			(dispatch: Dispatch) => {
				profileAPI.getUser(userId).then(response => {
					dispatch(setUserProfile(response.data))
				})
			}
	)
}

export const getUserStatusTC = (userId: string) => {
	return (
			(dispatch: Dispatch) => {
				profileAPI.getStatus(userId).then(response => {
					dispatch(setStatus(response.data))
					console.log('getStatus:' + response.data)
				})
			}
	)
}

export const updateStatusTC = (status: string) => {
	return (
			(dispatch: Dispatch) => {
				profileAPI.updateStatus(status).then(response => {
					if (response.data.resultCode === ResultCodeStatus.success) {
						dispatch(setStatus(status))
					}
				})
			}
	)
}

export const savePhotoTC = (file: string) => {
	return (
			(dispatch: Dispatch) => {
				profileAPI.savePhoto(file).then(response => {
					if (response.data.resultCode === ResultCodeStatus.success) {
						dispatch(savePhotoAC(response.data.photos))
					}
				})
			}
	)
}

//export const saveProfileTC = (fullName: string, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, vk: null | string) => {
export const saveProfileTC = (profile: ProfileType) => {
	return (
			// TS TYPE for Dispatch ??????
			async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
				const userId = getState().auth.userId
				await profileAPI.saveProfile(profile).then(response => {
					if (response.data.resultCode === ResultCodeStatus.success) {
						if (userId) {
							dispatch(setUserProfileTC(userId))
						}
					} else {
						// get error message from server
						let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
						// stop form submit if fields are wrong
						dispatch(stopSubmit('edit-profile', {_error: message}))

						// TODO: add error message to every contact field -> parse string
						//dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': message}}))
						return Promise.reject(message)

					}
				})
			}
	)
}


export default profileReducer;


// TYPES

export type AddPostACType = {
	type: typeof ADD_POST
	newPostBody: string
}

export type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}

export type SetStatusType = {
	type: typeof SET_STATUS
	status: string
}

export type SavePhotoType = {
	type: typeof SAVE_PHOTO
	photos: PhotosType
}

export type ProfileReducersActionType = AddPostACType | SetUserProfileType | SetStatusType | SavePhotoType

export type ProfileType = {
	userId: number
	aboutMe: string
	lookingForAJob: boolean
	lookingForAJobDescription: null | string
	fullName: string
	contacts: ProfileContactsType
	photos: PhotosType
}

type PhotosType = {
	small: null | string
	large: null | string
}

export type ProfileContactsType = {
	github: null | string
	vk: null | string
	facebook: null | string
	instagram: null | string
	twitter: null | string
	website: null | string
	youtube: null | string
	mainLink: null | string
}

export type ProfilePageType = {
	posts: Array<PostType>
	profile: ProfileType
	status: string
}