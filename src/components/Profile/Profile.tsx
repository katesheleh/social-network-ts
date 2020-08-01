import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';

export type ProfileComponentType = {
	profile: ProfileType
	status: string
	updateUserStatus: (status: string) => void
}

const Profile = (props: ProfileComponentType) => {
	return (
			<div className={styles.profile}>
				<h1>Profile </h1>
				<ProfileInfo
						profile={props.profile}
						status={props.status}
						updateUserStatus={props.updateUserStatus}/>
				<MyPostsContainer/>
			</div>
	);
};

export default Profile;