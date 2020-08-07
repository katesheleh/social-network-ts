import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {getAuthUserDataTC, logoutTC} from '../../redux/authReducer';


type MapStateToPropsTypes = {
	isAuth: boolean
	login:  string | null
}

type MapDispatchToPropsType = {
	setAuthUserDataThunk: () => void,
	logout: () => void
}

export type UserAuthOwnPropsType = MapStateToPropsTypes & MapDispatchToPropsType


class HeaderContainer extends React.Component<UserAuthOwnPropsType> {
	componentDidMount() {
		this.props.setAuthUserDataThunk()
	}

	render() {
		return (
				<Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
		)
	}
}


const MapStateToProps = (state: AppRootStateType): MapStateToPropsTypes => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(MapStateToProps, {
			setAuthUserDataThunk: getAuthUserDataTC,
			logout: logoutTC
		}
)(HeaderContainer);