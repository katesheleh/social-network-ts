import React from 'react';
import styles from './Message.module.css';

type MessagePost = {
  message: string
}

const Message = (props: MessagePost) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export default Message;