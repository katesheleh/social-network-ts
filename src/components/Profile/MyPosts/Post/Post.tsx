import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.imgWrap}>
        <img src="https://placeimg.com/50/50/tech" alt="temporal" />
      </div>
      <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  )
}

export default Post;