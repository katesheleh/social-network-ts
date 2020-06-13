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
  let stateCopy = { ...state };
  switch ( action.type ) {

    case ADD_MESSAGE:
      let newMessage = { id: v1(), message: state.newMessageText };
      stateCopy.messages = [ ...state.messages ];
      stateCopy.messages.push( newMessage );
      stateCopy.newMessageText = "";
      return stateCopy;

    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.newText;
      return stateCopy;

    default:
      return state;
  }
};

export default dialogsReducer;