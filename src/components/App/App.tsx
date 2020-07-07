import React from 'react';
import styles from './App.module.css';
import {Route} from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Music from '../Music/Music';
import Friends from '../Friends/Friends';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';

function App() {
	return (
			<div className={styles.app}>
				<main className={styles.main}>
					<div className={styles.sidebar}>
						<Sidebar/>
					</div>

					<div className={styles.content}>
						<div className={styles.contentMain}>
							<Route path='/profile:userId?' render={() => <ProfileContainer/>}/>
							<Route path='/dialogs' render={() => <DialogsContainer/>}/>
							<Route path='/users' render={() => <UsersContainer/>}/>
							<Route path='/news' render={() => <News/>}/>
							<Route path='/music' render={() => <Music/>}/>
							<Route path='/friends' render={() => <Friends/>}/>
						</div>
						<div className={styles.footer}>
							<Footer/>
						</div>
					</div>
				</main>
			</div>
	);
}

export default App;
