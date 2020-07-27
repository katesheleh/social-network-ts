import React, {ComponentClass, FunctionComponent} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setUserProfileThunkCreator} from '../../redux/profileReducer';
import {ProfileType} from '../../types/types';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type OwnProps = {}

type MapStateType = {
	profile: ProfileType
}

type MapDispatchType = {
	setUserProfileThunk: (userId: string) => void
}

export type ProfileContainerTypes = OwnProps & MapDispatchType & MapStateType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfileContainerTypes> {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = '8888'
		}
		this.props.setUserProfileThunk(userId)
	}


	render() {
		return <Profile profile={this.props.profile}/>
	}
}


const MapStateToProps = (state: AppRootStateType): MapStateType => ({
	profile: state.profilePage.profile
})



export default compose<any, any, any, any>(
		connect<MapStateType, MapDispatchType, OwnProps, AppRootStateType>(
				MapStateToProps,
				{
					setUserProfileThunk: setUserProfileThunkCreator
				}),
		withRouter,
		withAuthRedirect
)(ProfileContainer)

