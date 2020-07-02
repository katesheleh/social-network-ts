import usersReducer, {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from './usersReducer';
import {UsersStructureType} from '../types/types';

test('User should be followed', () => {
	const startState = {
		users: [
			{
				name: 'Katia',
				id: '1',
				photos: {
					small: 'small-pic.jpg',
					large: 'large-pic.jpg'
				},
				status: 'Hey, amigos!',
				followed: false
			},
			{
				name: 'John',
				id: '2',
				photos: {
					'small': 'small.jpg',
					'large': 'large.jpg'
				},
				status: 'Hey, hey',
				followed: false
			}
		],
		pageSize: 1,
		totalUsersCount: 2,
		currentPage: 1,
		isFetching: false
	}

	const action = followAC('1')
	const endState = usersReducer(startState, action)

	expect(endState.users[0].followed).toBe(true)
	expect(endState.users[1].followed).toBe(endState.users[1].followed)
})


test('User should be unfollowed', () => {
	const startState = {
		users: [
			{
				name: 'Katia',
				id: '1',
				photos: {
					small: 'small-pic.jpg',
					large: 'large-pic.jpg'
				},
				status: 'Hey, amigos!',
				followed: false
			},
			{
				name: 'John',
				id: '2',
				photos: {
					small: 'small.jpg',
					large: 'large.jpg'
				},
				status: 'Hey, hey',
				followed: false
			}
		],
		pageSize: 1,
		totalUsersCount: 2,
		currentPage: 1,
		isFetching: false
	}

	const action = unFollowAC('1')
	const endState = usersReducer(startState, action)

	expect(endState.users[0].followed).toBe(false)
	expect(endState.users[1].followed).toEqual(startState.users[1].followed)
})


test('Users should be set', () => {
	const users = [
		{
			name: 'Katia',
			id: '1',
			photos: {
				small: 'small-pic.jpg',
				large: 'large-pic.jpg'
			},
			status: 'Hey, amigos!',
			followed: false
		},
		{
			name: 'John',
			id: '2',
			photos: {
				small: 'small.jpg',
				large: 'large.jpg'
			},
			status: 'Hey, hey',
			followed: false
		}
	]
	const startState = {
		users: [],
		pageSize: 1,
		totalUsersCount: 2,
		currentPage: 1,
		isFetching: false
	}

	const action = setUsersAC(users)
	const endState = usersReducer(startState, action)

	expect(endState.users.length).toBe(2)
	expect(endState.users[0].name).toEqual('Katia')
	expect(endState.users[1].photos.small).toEqual('small.jpg')
})


test('Current page should be set', () => {
	const startState = {
		users: [
			{
				name: 'Katia',
				id: '1',
				photos: {
					small: 'small-pic.jpg',
					large: 'large-pic.jpg'
				},
				status: 'Hey, amigos!',
				followed: false
			},
			{
				name: 'John',
				id: '2',
				photos: {
					'small': 'small.jpg',
					'large': 'large.jpg'
				},
				status: 'Hey, hey',
				followed: false
			}
		],
		pageSize: 1,
		totalUsersCount: 2,
		currentPage: 1,
		isFetching: false
	}

	const action = setCurrentPageAC(3)
	const endState = usersReducer(startState, action)

	expect(endState.currentPage).toBe(3)

})


test('Total users count should be set', () => {
	const startState = {
		users: [
			{
				name: 'Katia',
				id: '1',
				photos: {
					small: 'small-pic.jpg',
					large: 'large-pic.jpg'
				},
				status: 'Hey, amigos!',
				followed: false
			},
			{
				name: 'John',
				id: '2',
				photos: {
					'small': 'small.jpg',
					'large': 'large.jpg'
				},
				status: 'Hey, hey',
				followed: false
			}
		],
		pageSize: 1,
		totalUsersCount: 2,
		currentPage: 1,
		isFetching: false
	}

	const endState = usersReducer(startState, setTotalCountAC(200))

	expect(endState.totalUsersCount).toEqual(200)
})