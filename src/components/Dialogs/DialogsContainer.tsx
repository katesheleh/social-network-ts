import React from 'react';
import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/state';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      { ( store ) => {
        let state = store.getState();

        let addMessage = () => {
          store.dispatch( addMessageActionCreator() );
        };

        const onMessageChange = ( text: string ) => {
          store.dispatch( updateNewMessageActionCreator( text ) );
        };
        return (
          <Dialogs
            dialogs={ state.messagesPage.dialogs }
            updateNewMessage={ onMessageChange }
            sendMessage={ addMessage }
            messages={ state.messagesPage.messages }
            newMessageText={ state.messagesPage.newMessageText } />
        );
      } }
    </StoreContext.Consumer>

  );
};

export default DialogsContainer;