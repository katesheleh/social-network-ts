import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  debugger;
  return (
    <div className={ styles.profile }>
      <h1>Profile </h1>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;