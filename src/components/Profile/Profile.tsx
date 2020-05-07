import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;