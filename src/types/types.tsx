import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_COUNT,
	SET_USERS,
	TOGGLE_FOLLOWING_PROGRESS,
	TOGGLE_IS_FETCHING,
	UNFOLLOW
} from '../redux/usersReducer';


export type UsersPageType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: Array<number>
}

export type UsersPagePropsType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	setCurrentPage: (currentPage: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	getUsers: (currentPage: number, pageSize: number) => void
	followUsers: (userId: string) => void
	unfollowUsers: (userId: string) => void
}

export type UsersPageUIType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	onPageChanged: (page: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	followUsers: (userId: string) => void
	unfollowUsers: (userId: string) => void
}

export type UsersStructureType = {
	name: string
	id: string
	photos: {
		small?: string
		large?: string
	}
	followed: boolean
	status: string
}

export type UsersFollowActionType = {
	type: typeof FOLLOW
	userId: string
}

export type UsersUnFollowActionType = {
	type: typeof UNFOLLOW
	userId: string
}

export type UsersSetUsersActionType = {
	type: typeof SET_USERS
	users: Array<UsersStructureType>
}

export type UsersCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}

export type UsersTotalCountActionType = {
	type: typeof SET_TOTAL_COUNT
	totalCount: number
}

export type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

export type ToggleFollowingInProgressActionType = {
	type: typeof TOGGLE_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}

export type UsersReducersActionType = UsersFollowActionType | UsersUnFollowActionType |
		UsersSetUsersActionType | UsersCurrentPageActionType | UsersTotalCountActionType |
		ToggleIsFetchingActionType | ToggleFollowingInProgressActionType


export type MapDispatchToPropsPostsType = (
		args: {
			type: string;
			newText?: string;
		}) => void


export type PaginationType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (page: number) => void
}


export enum ResultCodeStatus {
	'success' = 0,
	'error' = 1
}