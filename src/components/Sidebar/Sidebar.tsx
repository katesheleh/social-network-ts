import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Nav />
    </div>
  )
}

export default Sidebar;