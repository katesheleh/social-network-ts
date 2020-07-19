import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setAuthUserDataThunkCreator} from '../../redux/authReducer';
import {UserAuthOwnPropsType} from '../../types/types';

class HeaderContainer extends React.Component<UserAuthOwnPropsType> {
	componentDidMount() {
		this.props.setAuthUserDataThunk()
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
			setAuthUserDataThunk: setAuthUserDataThunkCreator
		}
)(HeaderContainer);