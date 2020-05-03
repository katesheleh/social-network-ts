import React from 'react';
import styles from './Post.module.css';

type PostType = {
  message: string
  likesCounter: number
}

const Post = (props: PostType) => {
  return (
    <div className={styles.post}>
      <div className={styles.imgWrap}>
        <img src="https://placeimg.com/50/50/tech" alt="temporal" />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{props.message}</p>
        <div className={styles.like}>{props.likesCounter} likes</div>
      </div>
    </div>
  )
}

export default Post;