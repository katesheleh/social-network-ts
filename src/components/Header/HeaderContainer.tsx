import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setAuthUserDataAC} from '../../redux/authReducer';
import {UserAuthOwnPropsType} from '../../types/types';

class HeaderContainer extends React.Component<UserAuthOwnPropsType> {
	componentDidMount() {
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
					withCredentials: true
				})
				.then(response => {

					if(response.data.resultCode === 0) {
						this.props.setAuthUserData(response.data.data)
					}
				})
	}

	render() {
		return (
				<Header isAuth={this.props.isAuth} login={this.props.login}/>
		)
	}
}


const MapStateToProps = (state: AppRootStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(MapStateToProps, {
			setAuthUserData: setAuthUserDataAC
		}
)(HeaderContainer)