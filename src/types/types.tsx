export type PostType = {
  id: string;
  message: string;
  likesCounter: number;
};

export type PostsType = {
  dispatch: ( action: any ) => void;
  posts: Array<PostType>;
  newPostText: string;
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
  dispatch: ( action: any ) => void;
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
  dispatch: ( action: any ) => void;
};

export type DispatchType = {
  type: string;
  newText?: string;
  userMessage?: string | undefined;
};

export type ObserverType = {
  observer: () => void;
};

export type rerenderEntireTreeType = {
  getState: () => StoreStateType;
};
export type StateType = {
  _state: StoreStateType;
  _callSubscriber: ( state: StoreStateType ) => void;
  getState: () => void;
  subscribe: ( observer: any ) => void;
  dispatch: ( action: any ) => void;
};

