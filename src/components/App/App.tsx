import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styles from './App.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Friends from '../Friends/Friends';
import { AppStateType } from '../../types';

function App(props: AppStateType) {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <main className={styles.main}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <div className={styles.contentMain}>
              <Route path="/profile" render={() => <Profile
                posts={props.appState.profilePage.posts} />} />

              <Route path="/dialogs" render={() => <Dialogs
                dialogs={props.appState.messagesPage.dialogs}
                messages={props.appState.messagesPage.messages} />} />
                
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/friends" render={() => <Friends />} />
            </div>            
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
