import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setUserProfileThunkCreator} from '../../redux/profileReducer';
import {IsAuthType, ProfileContainerCommonPropsType} from '../../types/types';
import {Redirect, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerCommonPropsType & IsAuthType> {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '2'
		}

		this.props.setUserProfileThunk(userId)

	}


	render() {

		// Redirect if user is not logged
		if (!this.props.isAuth) {
			return <Redirect to={'/login'}/>
		}

		return (
				<Profile profile={this.props.profile}/>
		)
	}
}

const MapStateToProps = (state: AppRootStateType) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(MapStateToProps, {
	setUserProfileThunk: setUserProfileThunkCreator
})(WithUrlDataContainerComponent);