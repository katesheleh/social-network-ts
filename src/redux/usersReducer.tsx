import {
	UsersCurrentPageActionType,
	UsersFollowActionType,
	UsersPageType,
	UsersReducersActionType, UsersSetUsersActionType,
	UsersStructureType,
	UsersUnFollowActionType,
	UsersTotalCountActionType, ToggleIsFecthingActionType, ToggleFollowingInProgressActionType
} from '../types/types';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
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

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
						? [...state.followingInProgress, action.userId]
						: state.followingInProgress.filter(id => id != action.userId)
			}

		default:
			return state
	}
}

export const followAC = (userId: string): UsersFollowActionType => ({type: FOLLOW, userId})

export const unFollowAC = (userId: string): UsersUnFollowActionType => ({type: UNFOLLOW, userId})

export const setUsersAC = (users: Array<UsersStructureType>): UsersSetUsersActionType => ({type: SET_USERS, users})

export const setCurrentPageAC = (currentPage: number): UsersCurrentPageActionType => ({
	type: SET_CURRENT_PAGE, currentPage
})

export const setTotalCountAC = (totalCount: number): UsersTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFecthingActionType => ({
	type: TOGGLE_IS_FETCHING, isFetching
})

export const toggleFollowingInProgressAC = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
	type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId
})


export default usersReducer;