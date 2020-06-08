import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../types/types';

const MyPosts = ( props: PostsType ) => {
  let postsElements = props.posts.map( post =>
    <Post
      key={ post.id }
      id={ post.id }
      message={ post.message }
      likesCounter={ post.likesCounter }
    /> );

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = ( e: ChangeEvent<HTMLTextAreaElement> ) => {
    let text = e.target.value;
    props.updatePostNewText( text );
  };

  return (
    <div className={ styles.myPosts }>
      <h2>My Posts</h2>
      <div className={ styles.form }>
        <textarea
          value={ props.newPostText }
          onChange={ onPostChange }
          placeholder='Write your post here'
          className={ styles.textarea }
        />
        <button
          onClick={ onAddPost }
          className={ styles.button }>Add post</button>
      </div>
      <div className={ styles.postsList }>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;