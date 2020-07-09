import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderPropsType} from '../../types/types';

const Header = (props: HeaderPropsType) => {

	return (
			<header className={styles.header}>
				<h3 className={styles.title}>Social Network <span>by Katia Sheleh</span></h3>

				<div className={styles.loginBlock}>

					{props.isAuth
							? `Hello, ${props.login}!`
							: <NavLink className={styles.loginLink} to={'/login'}>Login</NavLink>}

				</div>
			</header>
	)
}

export default Header;