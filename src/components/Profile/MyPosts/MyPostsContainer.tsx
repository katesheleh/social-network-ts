import React from 'react';
import { PostsContainerType } from '../../../types/types';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';
import MyPosts from './MyPosts';

const MyPostsContainer = ( props: PostsContainerType ) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() );
  };

  let onPostChange = ( text: string ) => {
    props.store.dispatch( updateNewPostTextActionCreator( text ) );
  };

  return (
    <MyPosts
      updatePostNewText={ onPostChange }
      addPost={ addPost }
      posts={ state.profilePage.posts }
      newPostText={ state.profilePage.newPostText } />
  );
};

export default MyPostsContainer;