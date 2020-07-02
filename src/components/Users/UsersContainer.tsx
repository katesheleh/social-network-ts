import React from 'react';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from '../../redux/usersReducer';
import {MapDispatchToPropsUsersType, StateInitialType, UsersPagePropsType, UsersStructureType} from '../../types/types';
import axios from 'axios';
import Users from './Users';


class UsersContainer extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&sortOrder=asc`)
				.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&sortOrder=asc`)
				.then(response => {
					this.props.setUsers(response.data.items)
				})
	}

	render() {
		return <Users
				currentPage={this.props.currentPage}
				users={this.props.users}
				pageSize={this.props.pageSize}
				totalUsersCount={this.props.totalUsersCount}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				onPageChanged={this.onPageChanged}/>
	}
}


let mapStateToProps = (state: StateInitialType) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = (dispatch: MapDispatchToPropsUsersType) => {
	return {
		follow: (userId: string) => {
			dispatch(followAC(userId))
		},
		unFollow: (userId: string) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users: Array<UsersStructureType>) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage: number) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch(setTotalCountAC(totalCount))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)