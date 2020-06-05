import { v1 } from "uuid";
import { MessagesPageType, DialogsReducerType } from "../types/types";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = ( state: MessagesPageType, action: DialogsReducerType ) => {
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