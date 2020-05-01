import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.link}>Profile</a>
      <a href="/" className={styles.link}>Messages</a>
      <a href="/" className={styles.link}>News</a>
      <a href="/" className={styles.link}>Music</a>
      <a href="/" className={styles.link}>Users</a>
    </nav>
  )
}

export default Nav;