import React from 'react';
import styles from './Users.module.css';
import {UsersPagePropsType} from "../../types/types";
import {v1} from "uuid";

const Users = (props: UsersPagePropsType) => {

	if (props.users.length === 0) {
		props.setUsers(
				[
					{
						id: v1(),
						followed: false,
						fullName: 'Katia Sheleh',
						status: 'Hey',
						location: {city: 'Minsk', country: 'Belarus'}
					},
					{
						id: v1(),
						followed: true,
						fullName: 'John Smith',
						status: 'Hey',
						location: {city: 'Minsk', country: 'Belarus'}
					}
				]
		)
	}

	return (
			<div className={styles.users}>
				<h1>Users</h1>
				{
					props.users.map(u => <div className={styles.item} key={u.id}>
						<div className={styles.colLeft}>
							<div><img src='https://dummyimage.com/100x100/dbc629.jpg' alt={u.fullName}/></div>
							{u.followed
									? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
									: <button onClick={() => props.follow(u.id)}>Follow</button>
							}
						</div>
						<div className={styles.colRight}>
							<div className={styles.userInfo}>
								<h4>{u.fullName}</h4>
								<p>{u.status}</p>
							</div>
							<div className={styles.userLocation}>
								<p>{u.location.city}</p>
								<p>{u.location.country}</p>
							</div>
						</div>
					</div>)
				}
			</div>
	)
}

export default Users;