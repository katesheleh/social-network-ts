import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';
import {ProfileContainerCommonPropsType} from '../../types/types';
import {withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';


class ProfileContainer extends React.Component<ProfileContainerCommonPropsType> {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '2'
		}

		profileAPI.getUser(userId).then(response => {
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