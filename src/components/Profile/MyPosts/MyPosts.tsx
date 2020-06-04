import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../types/types';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = ( props: PostsType ) => {
  let postsElements = props.posts.map( post =>
    <Post
      key={ post.id }
      id={ post.id }
      message={ post.message }
      likesCounter={ post.likesCounter }
    /> );

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    debugger;
    props.dispatch( addPostActionCreator() );
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    if ( text ) {
      props.dispatch( updateNewPostTextActionCreator( text ) );
    }
  };

  return (
    <div className={ styles.myPosts }>
      <h2>My Posts</h2>
      <div className={ styles.form }>
        <textarea
          value={ props.newPostText }
          onChange={ onPostChange }
          ref={ newPostElement }
          placeholder='Write your post here'
          className={ styles.textarea }
        />
        <button
          onClick={ addPost }
          className={ styles.button }>Add post</button>
      </div>
      <div className={ styles.postsList }>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;