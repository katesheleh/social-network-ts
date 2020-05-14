import React from 'react';
import styles from './ProfileInfo.module.css';
import banner from '../../../images/banner-profile.jpg';

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.banner}>
        <img className={styles.img} src={banner} alt='banner' />
      </div>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Katia Sheleh</h3>
        <p className={styles.data}><strong>Birthday: </strong>22 april</p>
        <p className={styles.data}><strong>Place: </strong>Tarragona, Spain // Minsk, Belarus</p>
        <p className={styles.data}><strong>Job: </strong>Front-end developer</p>
      </div>
    </div>
  )
}

export default ProfileInfo;