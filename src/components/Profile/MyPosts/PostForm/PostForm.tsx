import React from 'react';
import styles from './PostForm.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export type PostFormDataType = {
	newPostBody: string
}

const PostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {


	return (
			<form className={styles.form} onSubmit={props.handleSubmit}>
				<Field
						component={'textarea'}
						name={'newPostBody'}
						placeholder='Write your post here'
						className={styles.textarea}
				/>
				<button
						className={styles.button}>Add post
				</button>
			</form>
	)
}

export default reduxForm<PostFormDataType>({
	// a unique name for the form
	form: 'postForm'
})(PostForm)