import { v1 } from "uuid";
import { StoreStateType, DispatchType } from "../types/types";


const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

export const addPostActionCreator = () => {
  return ( { type: ADD_POST } );
};

export const updateNewPostTextActionCreator = ( text: string ) => {
  return (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
  );
};

export const addMessageActionCreator = ( message: string ) => {
  return (
    { type: ADD_MESSAGE, userMessage: message }
  );
};

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
    },
  },
  _callSubscriber( state: StoreStateType ) {
    console.log( "State was changed" );
  },
  getState() {
    return this._state;
  },
  subscribe( observer: any ) { //ObserverType 
    this._callSubscriber = observer;
  },
  dispatch( action: DispatchType ) {
    if ( action.type === ADD_POST ) {
      let newPost = {
        id: v1(),
        message: this._state.profilePage.newPostText,
        likesCounter: 0,
      };

      this._state.profilePage.posts.push( newPost );
      this._state.profilePage.newPostText = "";
      this._callSubscriber( this._state );

    } else if ( action.type === UPDATE_NEW_POST_TEXT ) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber( this._state );

    } else if ( action.type === ADD_MESSAGE ) {
      let newMessage = { id: v1(), message: action.userMessage };
      this._state.messagesPage.messages.push( newMessage );
      this._callSubscriber( this._state );
    }
  }
};

//export type StateType = typeof store;
export default store;
