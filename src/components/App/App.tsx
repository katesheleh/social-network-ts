import React from 'react';
import styles from './App.module.css';
import {Route, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Music from '../Music/Music';
import Friends from '../Friends/Friends';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Login/Login';
import {connect} from 'react-redux';

import {compose} from 'redux';
import {initializeAppTC} from '../../redux/appReducer';
import {AppRootStateType} from '../../redux/redux-store';
import Preloader from '../common/Preloader/Preloader';


type MDTPType = {
	initializeApp: () => void
}

type MSTPType = {
	initialized: boolean
}

type AppPropsType = MDTPType & MSTPType

type PathParamsType = {}

type OwnPropsType = RouteComponentProps<PathParamsType> & AppPropsType

class App extends React.Component<OwnPropsType> {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
				<div className={styles.app}>
					<main className={styles.main}>
						<div className={styles.sidebar}>
							<Sidebar/>
						</div>

						<div className={styles.content}>
							<div className={styles.contentMain}>
								<Route path='/login' render={() => <Login/>}/>
								<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
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
		)
	}
}

const MapStateToProps = (state: AppRootStateType): MSTPType => ({
	initialized: state.app.initialized
})


export default compose<any, any, any>(
		withRouter,
		connect(MapStateToProps, {initializeApp: initializeAppTC}))(App)
