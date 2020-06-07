import { v1 } from "uuid";
import { MessagesPageType, DialogsReducerType } from "../types/types";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
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
  newMessageText: ""
};

const dialogsReducer = ( state: MessagesPageType = initialState, action: DialogsReducerType ) => {
  switch ( action.type ) {

    case ADD_MESSAGE:
      let newMessage = { id: v1(), message: state.newMessageText };
      state.messages.push( newMessage );
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;