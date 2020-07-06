import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/no_profile_image_placeholder.jpg';
import {UsersPageUIType} from '../../types/types';
import Pagination from '../common/Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';

const Users = (props: UsersPageUIType) => {
	return (
			<div className={styles.users}>
				<h1>Users</h1>
				<Pagination
						totalUsersCount={props.totalUsersCount}
						pageSize={props.pageSize}
						currentPage={props.currentPage}
						onPageChanged={props.onPageChanged}
				/>
				{
					props.isFetching
							? <Preloader/>
							: <>
								<div className={styles.usersWrapper}>
									{
										props.users.map(u => <div className={styles.item} key={u.id}>
											<div className={styles.colLeft}>
												<NavLink to={`/profile/${u.id}`} target='_blank'>
													<img
															src={u.photos.small != null ? u.photos.small : userPhoto}
															alt={u.name}/>
												</NavLink>

												{u.followed
														? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
														: <button onClick={() => props.follow(u.id)} className={styles.btnFollow}>Follow</button>
												}
											</div>

											<div className={styles.colRight}>
												<div className={styles.userInfo}>
													<h5 className={styles.title}>{u.name}</h5>
													<p className={styles.text}><i>{u.status}</i></p>
												</div>
											</div>

										</div>)
									}
								</div>

								<Pagination
										totalUsersCount={props.totalUsersCount}
										pageSize={props.pageSize}
										currentPage={props.currentPage}
										onPageChanged={props.onPageChanged}
								/>
							</>
				}

			</div>
	)
}

export default Users
