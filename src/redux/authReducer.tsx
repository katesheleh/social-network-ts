import {AuthReducersActionType, AuthUserType, SetUserDataType, SetUserProfileType} from '../types/types';
import {Dispatch} from 'react';
import {authAPI} from '../api/api';

export const SET_USER_DATA = 'SET_USER_DATA';

let initialState: AuthUserType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state: AuthUserType = initialState, action: AuthReducersActionType) => {

	switch (action.type) {
		case SET_USER_DATA:

			return {...state, ...action.data, isAuth: true}

		default:
			return state
	}
}

export const setAuthUserDataAC = (data: AuthUserType): SetUserDataType => ({type: SET_USER_DATA, data})


export const setAuthUserDataThunkCreator = () => {
	return (
			(dispatch: Dispatch<SetUserDataType>) => {
				authAPI.authUser().then(data => {
					if (data.resultCode === 0) {
						dispatch(setAuthUserDataAC(data.data))
					}
				})
			}
	)
}

export default authReducer