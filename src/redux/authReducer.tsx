import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ResultCodeStatus} from '../types/types';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
import {stopSubmit} from 'redux-form';

export const SET_USER_DATA = 'SET_USER_DATA';

export type AuthUserType = {
	userId: null | string
	email: null | string
	login: null | string
	isAuth: boolean
}


export type SetUserDataType = {
	type: typeof SET_USER_DATA
	data: AuthUserType
}

export type StopSubmitType = any

export type AuthReducersActionType = SetUserDataType


let initialState: AuthUserType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}


const authReducer = (state: AuthUserType = initialState, action: AuthReducersActionType) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {...state, ...action.data}

		default:
			return state
	}
}


export const setAuthUserDataAC = (userId: null | string, email: null | string, login: null | string, isAuth: boolean): SetUserDataType =>
		({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

// thunk
export const getAuthUserDataTC = () => (dispatch: Dispatch<SetUserDataType>) => {
	return authAPI.me().then(res => {
		if (res.resultCode === ResultCodeStatus.success) {
			let {id, login, email} = res.data
			dispatch(setAuthUserDataAC(id, email, login, true))
		}
	})
}


export const loginTC = (email: string, password: string, rememberMe: boolean) =>
		(dispatch: ThunkDispatch<AppRootStateType, unknown, AuthReducersActionType & StopSubmitType>) => {

			authAPI.login(email, password, rememberMe).then(res => {
				if (res.resultCode === ResultCodeStatus.success) {
					dispatch(getAuthUserDataTC())
				} else {
					// get error message from server
					let message = res.messages.length > 0 ? res.messages[0] : 'Some Error'
					// stop form submit if fields are wrong
					dispatch(stopSubmit('login', {_error: message}))
				}
			})
		}

export const logoutTC = () => (dispatch: Dispatch<SetUserDataType>) => {
	authAPI.logout().then(res => {
		if (res.resultCode === ResultCodeStatus.success) {
			dispatch(setAuthUserDataAC(null, null, null, false))
		}
	})
}


export default authReducer