import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../types';

const MyPosts = (props: PostsType) => {
  // add post
  let [post, setPost] = useState('');

  // trim string empty spaces
  // post -> from useState: [post, setPost]  
  let trimmedPostString = post.trim();

  // validate textarea
  let [error, setError] = useState<string | null>(null);

  let postsElements = props.posts.map(post =>
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likesCounter={post.likesCounter}
    />);

  let addPost = () => {
    if (trimmedPostString) {
      // post -> from useState: [post, setPost]    
      props.addPost(trimmedPostString)
    } else {
      // setError -> from useState: [error, setError]  
      setError('Oops.... It seems you wrote nothing yet.');
    }
    setPost('')
  }

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setError -> from useState: [error, setError]
    setError(null)
    // setPost -> from useState: [post, setPost]
    setPost(e.currentTarget.value)
  }

  // add post onKeyPress: ctrl + enter
  const onKeyPressTextAreaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.charCode === 13) {
      addPost()
    }
  }

  return (
    <div className={styles.myPosts}>
      <h2>My Posts</h2>
      <div className={styles.form}>
        <textarea
          // post -> from useState: [post, setPost]
          value={post}
          onChange={onChangeTextAreaHandler}
          onKeyPress={onKeyPressTextAreaHandler}
          // add error ClassName
          className={error ? `${styles.textarea} ${styles.error}` : `${styles.textarea}`} />
        {/* Error message */}
        {error && <div className={`${styles.errorMsg}`}>{error}</div>}
        <button
          onClick={addPost}
          // if string.lenght > 0 add button active class
          className={trimmedPostString ? `${styles.button} ${styles.active}` : `${styles.button}`}>Add post</button>
      </div>
      <div className={styles.postsList}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;