import {ADD_POST, UPDATE_NEW_POST_TEXT} from '../redux/profileReducer';
import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from '../redux/dialogsReducer';
import {
	FOLLOW,
	UNFOLLOW,
	SET_USERS,
	SET_CURRENT_PAGE,
	SET_TOTAL_COUNT,
	TOGGLE_IS_FETCHING
} from '../redux/usersReducer';

export type PostType = {
	id: string
	message: string
	likesCounter: number
}

export type PostsType = {
	posts: Array<PostType>
	newPostText: string
	updatePostNewText: (text: string) => void
	addPost: () => void
}

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

export type ProfilePageType = {
	posts: Array<PostType>
	newPostText: string
}

export type MessagesPageType = {
	dialogs: Array<DialogItemType>
	messages: Array<MessageType>
	newMessageText: string
}

export type AddPostACType = {
	type: typeof ADD_POST
}

export type UpdateNewPostTextACType = {
	type: typeof UPDATE_NEW_POST_TEXT
	newText: string
}

export type ProfileReducersActionType = AddPostACType | UpdateNewPostTextACType

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
}

export type UsersPagePropsType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (id: string) => void
	unFollow: (id: string) => void
	setUsers: (users: Array<UsersStructureType>) => void
	setTotalUsersCount: (totalCount: number) => void
	setCurrentPage: (currentPage: number) => void
	isFetching: boolean
	toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPageUIType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	follow: (id: string) => void
	unFollow: (id: string) => void
	onPageChanged: (page: number) => void
	isFetching: boolean
}

type UserPhotosType = {
	small?: string
	large?: string
}

export type UsersStructureType = {
	name: string
	id: string
	photos: UserPhotosType
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

export type UsersReducersActionType = UsersFollowActionType | UsersUnFollowActionType |
		UsersSetUsersActionType | UsersCurrentPageActionType | UsersTotalCountActionType |
		ToggleIsFecthingActionType


export type MapDispatchToPropsPostsType = (
		args: {
			type: string;
			newText?: string;
		}) => void

export type MapDispatchToPropsDialogsType = (
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