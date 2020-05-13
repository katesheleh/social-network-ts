import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import { DialogItemType } from '../../../types';

const DialogItem = (props: DialogItemType) => {
  return (
    <div className={styles.dialogItem}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;