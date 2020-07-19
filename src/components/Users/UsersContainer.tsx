import React from 'react';
import {connect} from 'react-redux';
import {
	followUsersThunkCreator,
	getUsersThunkCreator,
	setCurrentPageAC,
	unfollowUsersThunkCreator
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

export default connect(
		mapStateToProps,
		{
			setCurrentPage: setCurrentPageAC,
			getUsers: getUsersThunkCreator,
			followUsers: followUsersThunkCreator,
			unfollowUsers: unfollowUsersThunkCreator
		}
)(UsersContainer);