import { StateType, addPost } from '../redux/state';

export type PostType = {
  id: number
  message: string
  likesCounter: number
}
export type PostsType = {
  posts: Array<PostType>
  addPost: (postMessage: string) => void
}

export type DialogItemType = {
  id: number
  name: string
}
export type DialogsType = {
  dialogs: Array<DialogItemType>
}

export type MessageType = {
  id: number
  message: string
}
export type MessagesType = {
  messages: Array<MessageType>
  addMessage: (userMessage: string) => void
}

export type AppStateType = {
  state: StateType
  addPost: (postMessage: string) => void
  addMessage: (userMessage: string) => void
}
