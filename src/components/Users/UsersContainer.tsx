import {connect} from 'react-redux'
import Users from './Users'
import {followAC, setUsersAC, unFollowAC} from '../../redux/usersReducer'
import {MapDispatchToPropsUsersType, StateInitialType, UsersStructureType} from '../../types/types'


let mapStateToProps = (state: StateInitialType) => {
	return {
		users: state.usersPage.users
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)