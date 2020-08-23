import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';

export type ProfileComponentType = {
	isOwner: boolean
	profile: ProfileType
	status: string
	updateUserStatus: (status: string) => void
	savePhoto: (file: any) => void
}

const Profile = (props: ProfileComponentType) => {
	return (
			<div className={styles.profile}>
				<h1>Profile </h1>
				<ProfileInfo
						isOwner={props.isOwner}
						profile={props.profile}
						status={props.status}
						updateUserStatus={props.updateUserStatus}
						savePhoto={props.savePhoto}/>
				<MyPostsContainer/>
			</div>
	)
}

export default Profile;