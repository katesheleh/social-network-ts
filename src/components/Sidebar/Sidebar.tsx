import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Sidebar.module.css';

import profileImg from '../../images/profile.jpg';
import dialogsImg from '../../images/dialogs.jpg';
import newsImg from '../../images/news.jpg';
import musicImg from '../../images/music.jpg';
import friendsImg from '../../images/friends.jpg';

import Banner from './Banner/Banner';
import Header from './Header/Header';
import Nav from './Nav/Nav';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Route path="/profile" render={() => <Banner image={profileImg} title={'Profile'} />} />
      <Route path="/dialogs" render={() => <Banner image={dialogsImg} title={'Dialogs'} />} />
      <Route path="/news" render={() => <Banner image={newsImg} title={'News'} />} />
      <Route path="/music" render={() => <Banner image={musicImg} title={'Music'} />} />
      <Route path="/friends" render={() => <Banner image={friendsImg} title={'Friends'} />} />
      
      <Header />
      <Nav />
    </div>
  )
}

export default Sidebar;