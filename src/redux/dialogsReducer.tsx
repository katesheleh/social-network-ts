import { v1 } from "uuid";
import { MessagesPageType } from "../types/types";

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
// TODO: fix action ts type
const dialogsReducer = ( state: MessagesPageType = initialState, action: any ) => { //DialogsReducerType
  switch ( action.type ) {

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [ ...state.messages, { id: v1(), message: state.newMessageText } ],
        newMessageText: ''
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };

    default:
      return state;
  }
};

export default dialogsReducer;