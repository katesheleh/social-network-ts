import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {ResultCodeStatus} from '../types/types';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
import {stopSubmit} from 'redux-form';

let initialState: AuthUserType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: ''
}

const authReducer = (state: AuthUserType = initialState, action: AuthReducersActionType) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {...state, ...action.data}

		case GET_CAPTCHA_URL_SUCCESS:
			return {...state, ...action.payload}

		default:
			return state
	}
}


export const setAuthUserDataAC = (userId: null | string, email: null | string, login: null | string, isAuth: boolean, captchaUrl: string): SetUserDataType =>
		({type: SET_USER_DATA, data: {userId, email, login, isAuth, captchaUrl}})

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaType =>
		({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

// thunk
export const getAuthUserDataTC = () => (dispatch: Dispatch<SetUserDataType>) => {
	return authAPI.me().then(res => {
		if (res.resultCode === ResultCodeStatus.success) {
			let {id, login, email} = res.data
			dispatch(setAuthUserDataAC(id, email, login, true, initialState.captchaUrl))
		}
	})
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captchaUrl: string) =>
		async (dispatch: ThunkDispatch<AppRootStateType, unknown, AuthReducersActionType & StopSubmitType>) => {
			await authAPI.login(email, password, rememberMe, captchaUrl).then(res => {
				if (res.resultCode === ResultCodeStatus.success) {
					dispatch(getAuthUserDataTC())
				} else {
					if (res.resultCode === 10) {
						dispatch(getCaptchaUrlSuccess(initialState.captchaUrl))
					}
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
			dispatch(setAuthUserDataAC(null, null, null, false, ''))
		}
	})
}

export const getCaptchUrlTC = () =>
		async (dispatch: Dispatch) => {
			await securityAPI.getCaptchaUrl().then(res => {
				const captchUrl = res.data.url
				dispatch(getCaptchaUrlSuccess(captchUrl))
			})
		}


export default authReducer


// TYPES
export const SET_USER_DATA = 'SET_USER_DATA';
export const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type AuthUserType = {
	userId: null | string
	email: null | string
	login: null | string
	isAuth: boolean
	captchaUrl: string
}


export type SetUserDataType = {
	type: typeof SET_USER_DATA
	data: AuthUserType
}

export type GetCaptchaType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS
	payload: {
		captchaUrl: string
	}
}

export type StopSubmitType = any

export type AuthReducersActionType = SetUserDataType | GetCaptchaType


