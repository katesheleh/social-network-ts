import {
	ToggleFollowingInProgressActionType,
	ToggleIsFetchingActionType,
	UsersCurrentPageActionType,
	UsersFollowActionType,
	UsersPageType,
	UsersReducersActionType,
	UsersSetUsersActionType,
	UsersStructureType,
	UsersTotalCountActionType,
	UsersUnFollowActionType
} from '../types/types';
import {followAPI, usersAPI} from '../api/api';
import {Dispatch} from 'react';

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
						: state.followingInProgress.filter(id => id !== action.userId)
			}

		default:
			return state
	}
}

export const followSuccessAC = (userId: string): UsersFollowActionType => ({type: FOLLOW, userId})


export const unFollowSuccessAC = (userId: string): UsersUnFollowActionType => ({type: UNFOLLOW, userId})


export const setUsersAC = (users: Array<UsersStructureType>): UsersSetUsersActionType => ({type: SET_USERS, users})


export const setCurrentPageAC = (currentPage: number): UsersCurrentPageActionType => ({
	type: SET_CURRENT_PAGE, currentPage
})


export const setTotalCountAC = (totalCount: number): UsersTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})


export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => ({
	type: TOGGLE_IS_FETCHING, isFetching
})


export const toggleFollowingInProgressAC = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
	type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId
})


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
	return (
			(dispatch: Dispatch<ToggleIsFetchingActionType | UsersSetUsersActionType | UsersTotalCountActionType>) => {
				// show preloader
				dispatch(toggleIsFetchingAC(true))

				usersAPI.getUsers(currentPage, pageSize).then(data => {
					// hide preloader
					dispatch(toggleIsFetchingAC(false))
					dispatch(setUsersAC(data.items))
					dispatch(setTotalCountAC(data.totalCount))
				})
			}
	)
}


export const followUsersThunkCreator = (userId: string) => {
	return (
			(dispatch: Dispatch<ToggleFollowingInProgressActionType | UsersFollowActionType>) => {
				// disable btn during server response
				dispatch(toggleFollowingInProgressAC(true, +userId))
				followAPI.followUser(userId).then(response => {
					if (response.data.resultCode === 0) {
						dispatch(followSuccessAC(userId))
					}
					// activate btn after server response
					dispatch(toggleFollowingInProgressAC(false, +userId))
				})
			}
	)
}


export const unfollowUsersThunkCreator = (userId: string) => {
	return (
			(dispatch: Dispatch<ToggleFollowingInProgressActionType | UsersUnFollowActionType>) => {
				// disable btn during server response
				dispatch(toggleFollowingInProgressAC(true, +userId))
				followAPI.unfollowUser(userId).then(response => {
					if (response.data.resultCode === 0) {
						dispatch(unFollowSuccessAC(userId))
					}
					// activate btn after server response
					dispatch(toggleFollowingInProgressAC(false, +userId))
				})
			}
	)
}


export default usersReducer;