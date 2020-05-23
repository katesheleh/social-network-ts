import React, { useState, ChangeEvent } from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../types';

const MyPosts = (props: PostsType) => {
  let [post, setPost] = useState('');

  let postsElements = props.posts.map(post =>
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCounter={post.likesCounter}
    />);

  let addPost = () => {
    // post -> from useState: [post, setPost]
    setPost(post)
    props.addPost(post)

  }

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setPost -> from useState: [post, setPost]
    setPost(e.currentTarget.value)
  }

  return (
    <div className={styles.myPosts}>
      <h2>My Posts</h2>
      <div className={styles.form}>
        <textarea
          // post -> from useState: [post, setPost]
          value={post}
          onChange={onChangeTextAreaHandler}
          className={styles.textarea} />
        <button
          onClick={addPost}
          className={styles.button}>Add post</button>
      </div>
      <div className={styles.postsList}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;