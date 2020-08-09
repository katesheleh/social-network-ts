import appReducer, {AuthUserType, setAuthUserDataAC} from './authReducer';

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
	const action = setAuthUserDataAC('1', 'test@test.com', 'username', true)
	const endState = appReducer(startState, action)

	expect(endState.isAuth).toBeTruthy();
	expect(endState.login).toEqual('username');
})