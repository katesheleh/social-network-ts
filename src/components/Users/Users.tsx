import React, {MouseEvent} from 'react'
import styles from './Users.module.css'
import {UsersPagePropsType, UsersPageType} from '../../types/types'
import axios from 'axios'
import userPhoto from '../../assets/images/no_profile_image_placeholder.jpg'

class Users extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}&sortOrder=asc`)
				.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}&sortOrder=asc`)
				.then(response => {
					this.props.setUsers(response.data.items)
				})
	}

	render() {

		// calculate pagination pages

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return <div className={styles.users}>
			<h1>Users</h1>
			<div className={styles.pagination}>
				{
					pages.map(p => {
						return <span
								className={this.props.currentPage === p ? `${styles.page} ${styles.currentPage}` : `${styles.page}`}
								onClick={(e: MouseEvent<HTMLSpanElement>) => {
									this.onPageChanged(p)
								}}> {p} </span>
					})
				}
			</div>
			{
				this.props.users.map(u => <div className={styles.item} key={u.id}>
					<div className={styles.colLeft}>
						<div className={styles.img}>
							<img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									alt={u.name}
									width='100'
									height='100'/>
						</div>
						{u.followed
								? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
								: <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
	}
}

export default Users