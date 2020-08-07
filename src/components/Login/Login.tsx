import React from 'react';
import styles from './Login.module.css';
import LoginForm, {LoginFormDataType} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {loginTC, logoutTC} from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import {AppRootStateType} from '../../redux/redux-store';

export type MDTPType = {
	login: (email: string, password: string, rememberMe: boolean) => void
	logout: () => void
}

export type MSTPType = {
	isAuth: boolean
}

const Login = (props: MDTPType & MSTPType) => {
	const onSubmit = (formData: LoginFormDataType) => {
		console.log(formData)
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth) {
		return <Redirect to={'/profile'}/>
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


let mapStateToProps = (state: AppRootStateType): MSTPType => {
	return {
		isAuth: state.auth.isAuth
	}
}

const MapDispatchToProps: MDTPType = {
	login: loginTC,
	logout: logoutTC
}

export default connect(mapStateToProps, MapDispatchToProps)(Login)