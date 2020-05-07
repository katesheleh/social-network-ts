import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from './SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialLinks />
      <p className={styles.copyright}>© created by Katia Sheleh</p>
    </div>
  )
}

export default Footer;