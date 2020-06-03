import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsType } from '../../types/types';

const Profile = ( props: PostsType ) => {

  return (
    <div className={ styles.profile }>
      <h1>Profile </h1>
      <ProfileInfo />
      <MyPosts
        addPost={ props.addPost }
        posts={ props.posts }
        newPostText={ props.newPostText }
        updateNewPostText={ props.updateNewPostText } />
    </div>
  );
};

export default Profile;