import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';
import {ProfileContainerType} from '../../types/types';

class ProfileContainer extends React.Component<ProfileContainerType> {
	componentDidMount() {
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
				.then(response => {
					this.props.setUserProfile(response.data)
				})
	}

	render() {
		return (
				<Profile profile={this.props.profile}/>
		)
	}
}

const MapStateToProps = (state: AppRootStateType) => ({
	profile: state.profilePage.profile
})

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer);