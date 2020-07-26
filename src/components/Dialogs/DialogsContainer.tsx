import {addMessageAC, updateNewMessageAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogItemType, DialogsType, MessagesType, MessageType} from '../../types/types';
import {AppRootStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateType = {
	dialogs: Array<DialogItemType>
	newMessageText: string
	messages: Array<MessageType>
}

type MapDispatchToPropsType = {
	updateNewMessage: (text: string) => void
	sendMessage: () => void
}

type OwnProps = {}

let mapStateToProps = (state: AppRootStateType) => {
	return {
		dialogs: state.messagesPage.dialogs,
		newMessageText: state.messagesPage.newMessageText,
		messages: state.messagesPage.messages
	}
}

// withAuthRedirect -> custom hoc
let AuthRedirectComponent = withAuthRedirect<DialogsType & MessagesType>(Dialogs)


const DialogsContainer = connect<MapStateType, MapDispatchToPropsType, OwnProps, AppRootStateType>(mapStateToProps,
		{
			updateNewMessage: updateNewMessageAC,
			sendMessage: addMessageAC
		})(AuthRedirectComponent)

export default DialogsContainer;