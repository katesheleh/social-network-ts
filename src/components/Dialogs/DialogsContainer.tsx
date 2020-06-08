import React from 'react';
import { DialogsContainerType } from '../../types/types';
import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/state';
import Dialogs from './Dialogs';

const DialogsContainer = ( props: DialogsContainerType ) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch( addMessageActionCreator() );
  };

  const onMessageChange = ( text: string ) => {
    props.store.dispatch( updateNewMessageActionCreator( text ) );
  };

  return (
    <Dialogs
      dialogs={ state.messagesPage.dialogs }
      updateNewMessage={ onMessageChange }
      sendMessage={ addMessage }
      messages={ state.messagesPage.messages }
      newMessageText={ state.messagesPage.newMessageText } />
  );
};

export default DialogsContainer;