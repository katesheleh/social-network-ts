import { StateType } from "../redux/redux-store";

export type PostType = {
  id: string;
  message: string;
  likesCounter: number;
};

export type PostsType = {
  posts: Array<PostType>;
  newPostText: string;
  updatePostNewText: ( text: string ) => void;
  addPost: () => void;
};

export type DialogItemType = {
  id: string;
  name: string;
};

export type DialogsType = {
  dialogs: Array<DialogItemType>;
  updateNewMessage: ( text: string ) => void;
  sendMessage: () => void;
};

export type MessageType = {
  id: string;
  message: string;
};

export type MessagesType = {
  messages: Array<MessageType>;
  newMessageText: string;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type MessagesPageType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
  newMessageText: string;
};

export type StoreStateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export type DispatchType = {
  type: string;
  newText: string;
};

export type ProfileReducerType = {
  type: string;
  newText: string;
};

export type DialogsReducerType = {
  type: string;
  newText: string;
};


export type ProviderType = {
  store: StateType;
  children: React.ReactNode;
};
