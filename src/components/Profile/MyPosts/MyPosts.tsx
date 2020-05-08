import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

export type PostType = {
  id: number
  message: string
  likesCounter: number
}

let posts: Array<PostType> = [
  { id: 1, message: 'Hi World! How are you?', likesCounter: 75 },
  { id: 2, message: 'Today is a good day!', likesCounter: 57 },
]

let postsElements = posts
  .map(post => <Post id={post.id} message={post.message} likesCounter={post.likesCounter} />);

const MyPosts = () => {
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