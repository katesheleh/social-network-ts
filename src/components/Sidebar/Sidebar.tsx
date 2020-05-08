import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';
import Header from './Header/Header';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.banner}></div>
      <Header />
      <Nav />
    </div>
  )
}

export default Sidebar;