import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from '../redux/dialogsReducer';
import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_COUNT,
	SET_USERS,
	TOGGLE_FOLLOWING_PROGRESS,
	TOGGLE_IS_FETCHING,
	UNFOLLOW
} from '../redux/usersReducer';
import {SET_USER_DATA} from '../redux/authReducer';

export type DialogItemType = {
	id: string
	name: string
}

export type DialogsType = {
	dialogs: Array<DialogItemType>
	updateNewMessage: (text: string) => void
	sendMessage: () => void
}

export type MessageType = {
	id: string
	message: string
}

export type MessagesType = {
	messages: Array<MessageType>
	newMessageText: string
}

export type MessagesPageType = {
	dialogs: Array<DialogItemType>
	messages: Array<MessageType>
	newMessageText: string
}

export type AddMessageACType = {
	type: typeof ADD_MESSAGE
}

export type UpdateNewMessageACType = {
	type: typeof UPDATE_NEW_MESSAGE_TEXT
	newText: string
}

export type DialogsReducersActionType = AddMessageACType | UpdateNewMessageACType;

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

export type ToggleIsFecthingActionType = {
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
		ToggleIsFecthingActionType | ToggleFollowingInProgressActionType


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

export type AuthReducersActionType = SetUserDataType


export type UserAuthOwnPropsType = {
	setAuthUserDataThunk: () => void
	isAuth: boolean
	login: any
}

export type HeaderPropsType = {
	isAuth: boolean
	login: any
}

export enum ResultCodeStatus {
	'success' = 0,
	'error' = 1
}