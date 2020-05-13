export type PostType = {
  id: number
  message: string
  likesCounter: number
}
export type PostsType = {
  posts: Array<PostType>
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
}