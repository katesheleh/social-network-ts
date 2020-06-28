import {
	UsersFollowActionType,
	UsersPageType,
	UsersReducersActionType, UsersSetUsersActionType,
	UsersStructureType,
	UsersUnFollowActionType
} from '../types/types'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

const initialState = {
	users: []
}

const usersReducer = (state: UsersPageType = initialState, action: UsersReducersActionType) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u: UsersStructureType) => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u: UsersStructureType) => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}

		case SET_USERS:
			return {...state, users: [...state.users, ...action.users]}

		default:
			return state
	}
}

export const followAC = (userId: string): UsersFollowActionType => {
	return ({type: FOLLOW, userId})
}

export const unFollowAC = (userId: string): UsersUnFollowActionType => {
	return ({type: UNFOLLOW, userId})
}

export const setUsersAC = (users: Array<UsersStructureType>): UsersSetUsersActionType => {
	return ({type: SET_USERS, users})
}


export default usersReducer