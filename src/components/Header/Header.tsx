import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Social Network <span>by Katia Sheleh</span></h3>
    </header>
  )
}

export default Header;