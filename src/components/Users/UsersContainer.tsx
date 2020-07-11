import React from 'react';
import {connect} from 'react-redux';
import {
	followAC,
	setCurrentPageAC,
	setTotalCountAC,
	setUsersAC,
	toggleIsFetchingAC,
	unFollowAC
} from '../../redux/usersReducer';
import {UsersPagePropsType} from '../../types/types';
import axios from 'axios';
import Users from './Users';
import {AppRootStateType} from '../../redux/redux-store';


class UsersContainer extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		// show preloader
		this.props.toggleIsFetching(true)
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&sortOrder=asc`, {
					withCredentials: true
				})
				.then(response => {
					// hide preloader
					this.props.toggleIsFetching(false)
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)

		// show preloader
		this.props.toggleIsFetching(true)
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&sortOrder=asc`, {
					withCredentials: true
				})
				.then(response => {
					// hide preloader
					this.props.toggleIsFetching(false)
					this.props.setUsers(response.data.items)
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
						isFetching={this.props.isFetching}/>
		)
	}
}


let mapStateToProps = (state: AppRootStateType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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
			toggleIsFetching: toggleIsFetchingAC
		}
)(UsersContainer);