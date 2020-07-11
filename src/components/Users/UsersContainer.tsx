import React from 'react';
import {connect} from 'react-redux';
import {
	followAC,
	setCurrentPageAC,
	setTotalCountAC,
	setUsersAC, toggleFollowingInProgressAC,
	toggleIsFetchingAC,
	unFollowAC
} from '../../redux/usersReducer';
import {UsersPagePropsType} from '../../types/types';
import Users from './Users';
import {AppRootStateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		// show preloader
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			// hide preloader
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)

		// show preloader
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			// hide preloader
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		return (
				<Users
						currentPage={this.props.currentPage}
						users={this.props.users}
						pageSize={this.props.pageSize}
						totalUsersCount={this.props.totalUsersCount}
						follow={this.props.follow}
						unFollow={this.props.unFollow}
						onPageChanged={this.onPageChanged}
						isFetching={this.props.isFetching}
						followingInProgress={this.props.followingInProgress}
						toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
			follow: followAC,
			unFollow: unFollowAC,
			setUsers: setUsersAC,
			setCurrentPage: setCurrentPageAC,
			setTotalUsersCount: setTotalCountAC,
			toggleIsFetching: toggleIsFetchingAC,
			toggleFollowingInProgress: toggleFollowingInProgressAC
		}
)(UsersContainer);