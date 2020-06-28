import {connect} from 'react-redux'
import Users from './Users'
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from '../../redux/usersReducer'
import {MapDispatchToPropsUsersType, StateInitialType, UsersStructureType} from '../../types/types'


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

export default connect(mapStateToProps, mapDispatchToProps)(Users)