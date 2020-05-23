import React, { useState, ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType } from '../../types';

const Dialogs = (props: DialogsType & MessagesType) => {
  let dialogsElements = props.dialogs
    .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);

  let messagesElements = props.messages
    .map(message => <Message key={message.id} message={message.message} id={message.id} />);

  let [message, setMessage] = useState('')

  let addMessage = () => {
    
    // message -> from useState: [message, setMessage]
    props.addMessage(message)
    setMessage('')
  }

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setMessage -> from useState: [message, setMessage]
    setMessage(e.currentTarget.value)
  }

  return (
    <div className={styles.dialogs}>
      <h1>Dialogs</h1>
      <div className={styles.content}>

        <div className={styles.colLeft}>
          {dialogsElements}
        </div>

        <div className={styles.colRight}>
          {messagesElements}

          <div className={styles.form}>
            <textarea
              // message -> from useState: [message, setMessage]
              value={message}
              onChange={onChangeTextAreaHandler}
              className={styles.textarea} />
            <button
              onClick={addMessage}
              className={styles.button}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;