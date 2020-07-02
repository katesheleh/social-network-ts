import React, {MouseEvent} from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/no_profile_image_placeholder.jpg';
import {UsersPageUIType} from '../../types/types';

const Users = (props: UsersPageUIType) => {
	// calculate pagination pages
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
			<div className={styles.users}>
				<h1>Users</h1>
				<div className={styles.pagination}>
					{
						pages.map(p => {
							return <span
									key={p}
									className={props.currentPage === p ? `${styles.page} ${styles.currentPage}` : `${styles.page}`}
									onClick={(e: MouseEvent<HTMLSpanElement>) => {
										props.onPageChanged(p)
									}}> {p} </span>
						})
					}
				</div>
				{
					props.users.map(u => <div className={styles.item} key={u.id}>
						<div className={styles.colLeft}>
							<div className={styles.img}>
								<img
										src={u.photos.small != null ? u.photos.small : userPhoto}
										alt={u.name}
										width='100'
										height='100'/>
							</div>
							{u.followed
									? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
									: <button onClick={() => props.follow(u.id)}>Follow</button>
							}
						</div>
						<div className={styles.colRight}>
							<div className={styles.userInfo}>
								<h4>{u.name}</h4>
								<p>{u.status}</p>
							</div>
						</div>
					</div>)
				}
			</div>
	)
}

export default Users
