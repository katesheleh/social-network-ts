import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../..';

const MyPosts = (props: PostsType) => {

  let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCounter={post.likesCounter} />);

  return (
    <div className={styles.myPosts}>
      <h2>My Posts</h2>
      <form className={styles.form}>
        <textarea className={styles.textarea} />
        <button className={styles.button}>Add post</button>
      </form>
      <div className={styles.postsList}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;