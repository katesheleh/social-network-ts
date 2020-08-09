import React from 'react';
import {connect} from 'react-redux';
import {
	followUsersThunkCreator,
	getUsersThunkCreator,
	setCurrentPageAC,
	unfollowUsersThunkCreator
} from '../../redux/usersReducer';
import {UsersStructureType} from '../../types/types';
import Users from './Users';
import {AppRootStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

export type UsersPagePropsType = {
	users: Array<UsersStructureType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	setCurrentPage: (currentPage: number) => void
	isFetching: boolean
	followingInProgress: Array<number>
	getUsers: (currentPage: number, pageSize: number) => void
	followUsers: (userId: string) => void
	unfollowUsers: (userId: string) => void
}

type PathParamsType = {}

type OwnPropsType = RouteComponentProps<PathParamsType> & UsersPagePropsType

class UsersContainer extends React.Component<OwnPropsType> {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return (
				<Users
						currentPage={this.props.currentPage}
						users={this.props.users}
						pageSize={this.props.pageSize}
						totalUsersCount={this.props.totalUsersCount}
						onPageChanged={this.onPageChanged}
						isFetching={this.props.isFetching}
						followingInProgress={this.props.followingInProgress}
						followUsers={this.props.followUsers}
						unfollowUsers={this.props.unfollowUsers}
				/>
		)
	}
}


let mapStateToProps = (state: AppRootStateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose<any, any, any>(
		withRouter,
		connect(
				mapStateToProps,
				{
					setCurrentPage: setCurrentPageAC,
					getUsers: getUsersThunkCreator,
					followUsers: followUsersThunkCreator,
					unfollowUsers: unfollowUsersThunkCreator
				}
		)
)(UsersContainer)