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

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <main className={styles.main}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <div className={styles.contentMain}>
              <Route path="/profile" component={Profile} />
              <Route path="/dialogs" component={Dialogs} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/friends" component={Friends} />
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
