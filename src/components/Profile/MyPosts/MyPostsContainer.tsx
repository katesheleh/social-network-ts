import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      { ( store ) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch( addPostActionCreator() );
        };

        let onPostChange = ( text: string ) => {
          store.dispatch( updateNewPostTextActionCreator( text ) );
        };
        return (
          <MyPosts
            updatePostNewText={ onPostChange }
            addPost={ addPost }
            posts={ state.profilePage.posts }
            newPostText={ state.profilePage.newPostText } />
        );
      }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;