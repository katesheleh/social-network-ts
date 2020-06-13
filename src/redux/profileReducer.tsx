import { v1 } from "uuid";
import { ProfilePageType } from "../types/types";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    { id: v1(), message: "Hi World! How are you?", likesCounter: 75 },
    { id: v1(), message: "Today is a good day!", likesCounter: 57 },
  ],
  newPostText: "",
};
// TODO: fix action ts type
const profileReducer = ( state: ProfilePageType = initialState, action: any ) => { //ProfileReducerType

  switch ( action.type ) {
    case ADD_POST:
      let newPost = { id: v1(), message: state.newPostText, likesCounter: 0 };
      return {
        ...state,
        posts: [ newPost, ...state.posts ],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
};

export default profileReducer;