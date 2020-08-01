import React from 'react';
import styles from './Login.module.css';
import LoginForm, {LoginFormDataType} from './LoginForm/LoginForm';

const Login = () => {
	const onSubmit = (formData: LoginFormDataType) => {
		console.log(formData)
	}

	return (
			<div className={styles.login}>
				<h1>Login</h1>
				<section className={styles.section}>
					<LoginForm onSubmit={onSubmit}/>
				</section>
			</div>
	)
}

export default Login;