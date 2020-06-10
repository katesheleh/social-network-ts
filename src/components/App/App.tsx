import React from 'react';
import styles from './App.module.css';
import { Route } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import News from '../News/News';
import Music from '../Music/Music';
import Friends from '../Friends/Friends';
import DialogsContainer from '../Dialogs/DialogsContainer';

function App() {
  return (
    <div className={ styles.app }>
      <main className={ styles.main }>
        <div className={ styles.sidebar }>
          <Sidebar />
        </div>

        <div className={ styles.content }>
          <div className={ styles.contentMain }>
            <Route path='/profile' render={ () => <Profile /> } />
            <Route path='/dialogs' render={ () => <DialogsContainer /> } />
            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/friends' render={ () => <Friends /> } />
          </div>
          <div className={ styles.footer }>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
