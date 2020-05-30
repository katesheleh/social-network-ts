export type PostType = {
  id: string;
  message: string;
  likesCounter: number;
};

export type PostsType = {
  posts: Array<PostType>;
  addPost: ( postMessage: string ) => void;
  newPostText: string;
  updateNewPostText: ( newText: string ) => void;
};

export type DialogItemType = {
  id: string;
  name: string;
};

export type DialogsType = {
  dialogs: Array<DialogItemType>;
};

export type MessageType = {
  id: string;
  message: string;
};

export type MessagesType = {
  messages: Array<MessageType>;
  addMessage: ( userMessage: string ) => void;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

export type MessagesPageType = {
  dialogs: Array<DialogItemType>;
  messages: Array<MessageType>;
};

export type StoreStateType = {
  profilePage: ProfilePageType;
  messagesPage: MessagesPageType;
};

export type AppStateType = {
  state: StoreStateType; //StateType
  addPost: ( postMessage: string ) => void;
  addMessage: ( userMessage: string ) => void;
  updateNewPostText: ( newText: string ) => void;
};

