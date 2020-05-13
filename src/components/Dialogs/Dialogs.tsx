import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType } from '../../types';

const Dialogs = (props: DialogsType & MessagesType) => {
  let dialogsElements = props.dialogs
    .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

  let messagesElements = props.messages
    .map(message => <Message message={message.message} id={message.id} />);

  return (
    <div className={styles.dialogs}>
      <h1>Dialogs</h1>
      <div className={styles.content}>

        <div className={styles.colLeft}>
          {dialogsElements}
        </div>

        <div className={styles.colRight}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;