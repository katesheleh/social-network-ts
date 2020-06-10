import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/state';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = ( state: any ) => { // StateType
  return {
    dialogs: state.messagesPage.dialogs,
    newMessageText: state.messagesPage.newMessageText,
    messages: state.messagesPage.messages
  };
};

let mapDispatchToProps = ( dispatch: ( arg0: { type: string; newText?: string; } ) => void ) => {
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