import { v1 } from "uuid";
import { StoreStateType } from "../types/types";

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
  getState() {
    return this._state;
  },
  // StateType
  _callSubscriber( state: StoreStateType ) {
    // ???????????????????
    console.log( "State was changed" );
  },
  addPost() {
    let newPost = {
      id: v1(),
      message: this._state.profilePage.newPostText,
      likesCounter: 0,
    };
    this._state.profilePage.posts.push( newPost );
    this._state.profilePage.newPostText = "";
    this._callSubscriber( this._state );
  },
  updateNewPostText( newText: string ) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber( this._state );
  },
  subscribe( observer: any ) {
    this._callSubscriber = observer;
  },
  addMessage( userMessage: string ) {
    let newMessage = { id: v1(), message: userMessage };
    this._state.messagesPage.messages.push( newMessage );
    this._callSubscriber( this._state );
  },
};

export type StateType = typeof store;
export default store;
