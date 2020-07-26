import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsType, MessagesType} from '../../types/types';

const Dialogs = (props: DialogsType & MessagesType) => {
	let dialogsElements = props.dialogs
			.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

	let messagesElements = props.messages
			.map(message => <Message key={message.id} message={message.message} id={message.id}/>)

	let addMessage = () => {
		props.sendMessage()
	}

	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.target.value
		props.updateNewMessage(text)
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
								value={props.newMessageText}
								placeholder='Write your message here'
								onChange={onMessageChange}
								className={styles.textarea}/>
							<button
									onClick={addMessage}
									className={styles.button}>Add message
							</button>
						</div>
					</div>
				</div>
			</div>
	)
}

export default Dialogs;