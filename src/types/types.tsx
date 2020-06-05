export type PostType = {
  id: string;
  message: string;
  likesCounter: number;
};

export type PostsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: ( action: any ) => void;
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
  newMessageText: string;
  dispatch: ( action: any ) => void;
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

export type AppStateType = {
  state: StoreStateType; //StateType
  dispatch: ( action: any ) => void;
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

