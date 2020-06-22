import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {MapDispatchToPropsDialogsType, StateInitialType} from '../../types/types';

let mapStateToProps = ( state: StateInitialType ) => {
  return {
    dialogs: state.messagesPage.dialogs,
    newMessageText: state.messagesPage.newMessageText,
    messages: state.messagesPage.messages
  };
};


let mapDispatchToProps = ( dispatch: MapDispatchToPropsDialogsType ) => {
  return {
    updateNewMessage: ( text: string ) => {
      dispatch( updateNewMessageActionCreator( text ) );
    },
    sendMessage: () => {
      dispatch( addMessageActionCreator() );
    }
  };
};

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );

export default DialogsContainer;