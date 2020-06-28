import {
	UsersCurrentPageActionType,
	UsersFollowActionType,
	UsersPageType,
	UsersReducersActionType, UsersSetUsersActionType,
	UsersStructureType,
	UsersUnFollowActionType,
	UsersTotalCountActionType
} from '../types/types'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1
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
			return {...state, users: action.users}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_COUNT:
			return {...state, totalUsersCount: action.totalCount}

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

export const setCurrentPageAC = (currentPage: number): UsersCurrentPageActionType => {
	return({type: SET_CURRENT_PAGE, currentPage})
}

export const setTotalCountAC = (totalCount: number): UsersTotalCountActionType => {
	return({type: SET_TOTAL_COUNT, totalCount})
}


export default usersReducer