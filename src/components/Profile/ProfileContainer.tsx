import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';
import {ProfileContainerCommonPropsType} from '../../types/types';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerCommonPropsType> {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '2'
		}

		axios
				.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(MapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);