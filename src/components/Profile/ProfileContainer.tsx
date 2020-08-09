import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {getUserStatusTC, ProfileType, setUserProfileTC, updateStatusTC} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type OwnProps = {}

type MapStateType = {
	profile: ProfileType
	status: string
	authorizedUserId: string | null
	isAuth: boolean
}

type MapDispatchType = {
	setUserProfile: (userId: string) => void
	getUserStatus: (userId: string) => void
	updateUserStatus: (status: string) => void
}

export type Props = OwnProps & MapDispatchType & MapStateType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<Props> {

	componentDidMount() {
		let userId: string | null | number = this.props.match.params.userId;
		if (!userId) {
			userId = String(this.props.authorizedUserId)
			if(!userId) {
				this.props.history.push('/login')
			}
		}

		if (typeof userId === 'string') {
			this.props.setUserProfile(userId)
			setTimeout(() => {
				if (typeof userId === 'string') {
					this.props.getUserStatus(userId)
				}
			}, 1000)
		}
	}


	render() {
		return <Profile
				profile={this.props.profile}
				status={this.props.status} updateUserStatus={this.props.updateUserStatus}
		/>
	}
}


const MapStateToProps = (state: AppRootStateType): MapStateType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})


export default compose<any, any, any, any>(
		connect<MapStateType, MapDispatchType, OwnProps, AppRootStateType>(
				MapStateToProps,
				{
					setUserProfile: setUserProfileTC,
					getUserStatus: getUserStatusTC,
					updateUserStatus: updateStatusTC
				}),
		withRouter,
		withAuthRedirect
)(ProfileContainer)

