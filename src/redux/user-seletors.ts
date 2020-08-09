import {AppRootStateType} from './redux-store';
import {createSelector} from 'reselect';
import {UsersStructureType} from './usersReducer';

export const getUsers = (state: AppRootStateType) => {
	return state.usersPage.users
}

export const getUsersSelector = (state: AppRootStateType) => {
	return getUsers(state).filter(u => true)
}

export const getUserSuperSelector = createSelector(getUsers, (users: UsersStructureType[]) => {
	return users.filter(u => true)
})

export const getPageSize = (state: AppRootStateType) => {
	return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppRootStateType) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppRootStateType) => {
	return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
	return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppRootStateType) => {
	return state.usersPage.followingInProgress
}