import React from 'react';
import {connect} from 'react-redux';
import {
	followSuccessAC, unfollowUsersThunkCreator,
	getUsersThunkCreator,
	setCurrentPageAC,
	toggleFollowingInProgressAC,
	unFollowSuccessAC, followUsersThunkCreator
} from '../../redux/usersReducer';
import {UsersPagePropsType} from '../../types/types';
import Users from './Users';
import {AppRootStateType} from '../../redux/redux-store';


class UsersContainer extends React.Component<UsersPagePropsType> {

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
						//follow={this.props.follow}
						//unFollow={this.props.unFollow}
						onPageChanged={this.onPageChanged}
						isFetching={this.props.isFetching}
						followingInProgress={this.props.followingInProgress}
						//toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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

export default connect(
		mapStateToProps,
		{
			//follow: followSuccessAC,
			//unFollow: unFollowSuccessAC,
			setCurrentPage: setCurrentPageAC,
			//toggleFollowingInProgress: toggleFollowingInProgressAC,
			getUsers: getUsersThunkCreator,
			followUsers: followUsersThunkCreator,
			unfollowUsers: unfollowUsersThunkCreator
		}
)(UsersContainer);