import React from 'react';
import styles from './ProfileInfo.module.css';
import noUserImage from '../../../assets/images/no_profile_image_placeholder.jpg';
import {ProfileComponentType} from '../../../types/types';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props: ProfileComponentType) => {
	if (!props.profile) {
		return <Preloader/>
	} else {
		return (
				<div className={styles.profileInfo}>
					<div className={styles.banner}>
						{props.profile.photos.large !== null
								? <img
										className={styles.img}
										src={props.profile.photos.large}
										alt={props.profile.fullName}/>
								: <img
										className={styles.img}
										src={noUserImage}
										alt={props.profile.fullName}/>}
					</div>
					<div className={styles.content}>
						<h3 className={styles.subtitle}>{props.profile.fullName}</h3>

						<p className={`${styles.data} ${styles.contacts}`}><strong>Contacts: </strong>
							{!props.profile.contacts.facebook && !props.profile.contacts.website && !props.profile.contacts.vk
							&& !props.profile.contacts.twitter && !props.profile.contacts.instagram && !props.profile.contacts.youtube
							&& !props.profile.contacts.youtube && !props.profile.contacts.github && !props.profile.contacts.mainLink
									? 'no contact info' : ''}

							{props.profile.contacts.facebook ?
									<a href={props.profile.contacts.facebook} target='_blank' rel="noopener noreferrer">fb</a> : ''}
							{props.profile.contacts.website ?
									<a href={props.profile.contacts.website} target='_blank' rel="noopener noreferrer">web</a> : ''}
							{props.profile.contacts.vk ?
									<a href={props.profile.contacts.vk} target='_blank' rel="noopener noreferrer">vk</a> : ''}
							{props.profile.contacts.twitter ?
									<a href={props.profile.contacts.twitter} target='_blank' rel="noopener noreferrer">twitter</a> : ''}
							{props.profile.contacts.instagram ?
									<a href={props.profile.contacts.instagram} target='_blank'
										 rel="noopener noreferrer">instagram</a> : ''}
							{props.profile.contacts.youtube ?
									<a href={props.profile.contacts.youtube} target='_blank' rel="noopener noreferrer">youtube</a> : ''}
							{props.profile.contacts.github ?
									<a href={props.profile.contacts.github} target='_blank' rel="noopener noreferrer">github</a> : ''}
							{props.profile.contacts.mainLink ?
									<a href={props.profile.contacts.mainLink} target='_blank' rel="noopener noreferrer">mainLink</a> : ''}
						</p>

						<p className={styles.data}><strong>About: </strong>
							{props.profile.aboutMe !== null ? props.profile.aboutMe : 'no info'}</p>

						<p className={styles.data}><strong>I'm looking for a job: </strong>
							{props.profile.lookingForAJob ? 'yes' : 'no'}</p>

						{props.profile.lookingForAJob
								? <p className={styles.data}><strong>Job description: </strong>
									{props.profile.lookingForAJobDescription}
								</p>
								: ''}
					</div>
				</div>
		)
	}

}

export default ProfileInfo;