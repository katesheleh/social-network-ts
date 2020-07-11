import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setAuthUserDataAC} from '../../redux/authReducer';
import {UserAuthOwnPropsType} from '../../types/types';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component<UserAuthOwnPropsType> {
	componentDidMount() {
		authAPI.authUser().then(data => {
			if (data.resultCode === 0) {
				this.props.setAuthUserData(data.data)
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
)(HeaderContainer);