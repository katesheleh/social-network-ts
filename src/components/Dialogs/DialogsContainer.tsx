import {addMessageAC, updateNewMessageAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogItemType, MessageType} from '../../types/types';
import {AppRootStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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

export default compose<any, any, any>(
		connect<MapStateType, MapDispatchToPropsType, null, AppRootStateType>(
				mapStateToProps,
				{
					updateNewMessage: updateNewMessageAC,
					sendMessage: addMessageAC
				}),
		withAuthRedirect
)(Dialogs)