import { StateType } from '../redux/state';

export type PostType = {
  id: string
  message: string
  likesCounter: number
}
export type PostsType = {
  posts: Array<PostType>
  addPost: (postMessage: string) => void
}

export type DialogItemType = {
  id: string
  name: string
}
export type DialogsType = {
  dialogs: Array<DialogItemType>
}

export type MessageType = {
  id: string
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
