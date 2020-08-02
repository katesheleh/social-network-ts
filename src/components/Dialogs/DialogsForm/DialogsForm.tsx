import React from 'react';
import styles from './DialogsForm.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type DialogsFormDataType = {
	newMessageBody: string
}

const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

	return (
			<form className={styles.form} onSubmit={props.handleSubmit}>
				<Field
						component={'textarea'}
						name={'newMessageBody'}
						placeholder='Write your message here'
						className={styles.textarea}/>
				<button
						type={'submit'}
						className={styles.button}>Add message
				</button>
			</form>
	)
}

export default reduxForm<DialogsFormDataType>({
	// a unique name for the form
	form: 'messageForm'
})(DialogsForm)