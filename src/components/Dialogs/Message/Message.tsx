import React from 'react';
import styles from './Message.module.css';
import {MessageType} from '../../../types/types';

const Message=(props: MessageType) => {
  return (
    <div key={props.id} className={styles.message}>{props.message}</div>
  )
}

export default Message;