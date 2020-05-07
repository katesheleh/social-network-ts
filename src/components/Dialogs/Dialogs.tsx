import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <h1>Dialogs</h1>
      <div className={styles.content}>
        <div className={styles.colLeft}>
          <DialogItem id={1} name={'Jhon'} />
          <DialogItem id={2} name={'Nick'} />
          <DialogItem id={3} name={'Mary'} />
        </div>

        <div className={styles.colRight}>
          <Message message={'Hi! How are you?'} />
          <Message message={'I am fine! And you?'} />
          <Message message={'Me too. Have a nice day!'} />
          <Message message={'Thanks! :)'} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;