import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType } from '../../types';

const Dialogs = (props: DialogsType & MessagesType) => {
  let dialogsElements = props.dialogs
    .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);

  let messagesElements = props.messages
    .map(message => <Message key={message.id} message={message.message} id={message.id} />);

  // add message
  let [message, setMessage] = useState('')

  // trim string empty spaces
  // message -> from useState: [message, setMessage]  
  let trimmedMessageString = message.trim();

  // validate textarea
  let [error, setError] = useState<string | null>(null);

  let addMessage = () => {
    if (trimmedMessageString) {
      // message -> from useState: [message, setMessage]
      props.addMessage(message)
    } else {
      // setError -> from useState: [error, setError]  
      setError('Oops.... It seems you wrote nothing yet.');
    }
    setMessage('')
  }

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setError -> from useState: [error, setError]
    setError(null)
    // setMessage -> from useState: [message, setMessage]
    setMessage(e.currentTarget.value)
  }

  const onKeyPressTextAreaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.charCode === 13) {
      addMessage()
    }
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
              onKeyPress={onKeyPressTextAreaHandler}
              // add error ClassName
              className={error ? `${styles.textarea} ${styles.error}` : `${styles.textarea}`} />
            {/* Error message */}
            {error && <div className={`${styles.errorMsg}`}>{error}</div>}
            <button
              onClick={addMessage}
              className={trimmedMessageString ? `${styles.button} ${styles.active}` : `${styles.button}`}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;