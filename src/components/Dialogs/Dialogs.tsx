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

  let newMessageElement = React.createRef<HTMLTextAreaElement>();

  let addMessage = () => {
    let text = newMessageElement.current?.value
    console.log(text)
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

          <form className={styles.form}>
            <textarea
              ref={newMessageElement}
              className={styles.textarea} />
            <button
              onClick={addMessage}
              className={styles.button}>Add message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;