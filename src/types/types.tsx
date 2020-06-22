import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from '../redux/profileReducer';
import dialogsReducer, {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../redux/dialogsReducer";
import usersReducer, {FOLLOW, UNFOLLOW, SET_USERS} from '../redux/usersReducer';

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
}

export type UsersPagePropsType = {
	users: Array<UsersStructureType>
	follow: (id: string) => void
	unFollow: (id: string) => void
	setUsers: (users: Array<UsersStructureType>) => void
}

export type UserLocationType = {
	city: string
	country: string
}

export type UsersStructureType = {
	id: string
	followed: boolean
	fullName: string
	status: string
	location: UserLocationType
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

export type UsersReducersActionType = UsersFollowActionType | UsersUnFollowActionType | UsersSetUsersActionType


export type MapDispatchToPropsPostsType = (arg0: { type: string; newText?: string; }) => void
export type MapDispatchToPropsDialogsType = (arg0: { type: string; newText?: string; }) => void
export type MapDispatchToPropsUsersType = (arg0: { type: string; userId?: string; users?: Array<UsersStructureType> }) => void


export type StateInitialType = {
	profilePage: ProfilePageType
	messagesPage: MessagesPageType
	usersPage: UsersPageType
}


