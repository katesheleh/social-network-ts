import { v1 } from "uuid";
import { ProfilePageType, ProfileReducerType } from "../types/types";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
  posts: [
    { id: v1(), message: "Hi World! How are you?", likesCounter: 75 },
    { id: v1(), message: "Today is a good day!", likesCounter: 57 },
  ],
  newPostText: "",
};

const profileReducer = ( state: ProfilePageType = initialState, action: ProfileReducerType ) => {

  switch ( action.type ) {

    case ADD_POST:
      let newPost = { id: v1(), message: state.newPostText, likesCounter: 0 };
      state.posts.push( newPost );
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export default profileReducer;