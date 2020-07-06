import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileComponentType} from '../../types/types';

const Profile = (props: ProfileComponentType) => {
	return (
			<div className={styles.profile}>
				<h1>Profile </h1>
				<ProfileInfo profile={props.profile}/>
				<MyPostsContainer/>
			</div>
	);
};

export default Profile;