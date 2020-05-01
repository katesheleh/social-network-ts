import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.banner}>
        <img className={styles.img} src="https://placeimg.com/1600/350/tech" alt="banner" />
      </div>
      <div className={styles.content}>
        <h1>Profile</h1>
        <div>avatar + user description</div>
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;