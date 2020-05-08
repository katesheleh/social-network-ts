import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export type DialogItemType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

let dialogs: Array<DialogItemType> = [
  { id: 1, name: 'Jnon' },
  { id: 2, name: 'Nick' },
  { id: 3, name: 'Alex' }
]

let messages: Array<MessageType> = [
  { id: 1, message: 'Hi! How are you?' },
  { id: 2, message: 'I am fine! And you?' },
  { id: 3, message: 'Me too. Have a nice day!' }
]

let dialogsElements = dialogs
  .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

let messagesElements = messages
  .map(message => <Message message={message.message} id={message.id} />);

const Dialogs = () => {
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