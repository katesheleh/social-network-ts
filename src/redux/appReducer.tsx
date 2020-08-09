import {Dispatch} from 'redux';
import {getAuthUserDataTC} from './authReducer';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type InitializedSuccessType = {
	initialized: boolean
}

let initState: InitializedSuccessType = {
	initialized: false
}

type InitializedActionType = {
	type: typeof INITIALIZED_SUCCESS
}


const appReducer = (state: InitializedSuccessType = initState, action: InitializedActionType) => {

	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return {...state, initialized: true}

		default:
			return state
	}
}

export const initializedSuccess = (): InitializedActionType =>
		({type: INITIALIZED_SUCCESS})


export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
	let promise = dispatch(getAuthUserDataTC())
	Promise.all([promise])
			.then(() => {
				dispatch(initializedSuccess())
			})
}

export default appReducer