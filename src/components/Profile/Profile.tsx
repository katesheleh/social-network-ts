import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsContainerType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ( props: PostsContainerType ) => {
  debugger;
  return (
    <div className={ styles.profile }>
      <h1>Profile </h1>
      <ProfileInfo />
      <MyPostsContainer store={ props.store } />
    </div>
  );
};

export default Profile;