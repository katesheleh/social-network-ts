import { v1 } from "uuid";
import { StoreStateType, DispatchType } from "../types/types";
import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), message: "Hi World! How are you?", likesCounter: 75 },
        { id: v1(), message: "Today is a good day!", likesCounter: 57 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        { id: v1(), name: "Jnon" },
        { id: v1(), name: "Nick" },
        { id: v1(), name: "Alex" },
      ],
      messages: [
        { id: v1(), message: "Hi! How are you?" },
        { id: v1(), message: "I am fine! And you?" },
        { id: v1(), message: "Me too. Have a nice day!" },
        { id: v1(), message: ":)" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber( state: StoreStateType ) {
    console.log( "State was changed" );
  },
  getState() {
    return this._state;
  },
  subscribe( observer: any ) {
    this._callSubscriber = observer;
  },
  dispatch( action: DispatchType ) {
    this._state.profilePage = profileReducer( this._state.profilePage, action );
    this._state.messagesPage = dialogsReducer( this._state.messagesPage, action );
    this._callSubscriber( this._state );
  }
};

export const addPostActionCreator = () => {
  return ( { type: ADD_POST } );
};

export const updateNewPostTextActionCreator = ( text: string ) => {
  return (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
  );
};

export const addMessageActionCreator = () => {
  return (
    { type: ADD_MESSAGE }
  );
};

export const updateNewMessageActionCreator = ( text: string ) => {
  return (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
  );
};

export default store;
