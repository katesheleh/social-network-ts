import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h2>My Posts</h2>
      <form className={styles.form}>
        <textarea className={styles.textarea} />
        <button className={styles.button}>Add post</button>
      </form>
      <div className={styles.postsList}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;