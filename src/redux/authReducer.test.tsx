import {AuthUserType} from '../types/types';
import authReducer, {setAuthUserDataAC} from './authReducer';

let startState: AuthUserType;

beforeEach(() => {
	startState = {
		userId: '1',
		email: 'test@test.com',
		login: 'username',
		isAuth: false
	}
})

test('User data should be set', () => {
	const action = setAuthUserDataAC(startState)
	const endState = authReducer(startState, action)

	expect(endState.isAuth).toBeTruthy();
	expect(endState.login).toEqual('username');
})