import {addMessageAC, updateNewMessageAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {MapDispatchToPropsDialogsType} from '../../types/types';
import {AppRootStateType} from '../../redux/redux-store';

let mapStateToProps = (state: AppRootStateType) => {
	return {
		dialogs: state.messagesPage.dialogs,
		newMessageText: state.messagesPage.newMessageText,
		messages: state.messagesPage.messages,
		isAuth: state.auth.isAuth
	}
}


let mapDispatchToProps = (dispatch: MapDispatchToPropsDialogsType) => {
	return {
		updateNewMessage: (text: string) => {
			dispatch(updateNewMessageAC(text))
		},
		sendMessage: () => {
			dispatch(addMessageAC())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;