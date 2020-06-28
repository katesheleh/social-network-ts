import React from 'react'
import styles from './Users.module.css'
import {UsersPagePropsType} from '../../types/types'
import axios from 'axios'
import userPhoto from '../../assets/images/no_profile_image_placeholder.jpg'

class Users extends React.Component<UsersPagePropsType> {

	componentDidMount() {
		axios
				.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					this.props.setUsers(response.data.items)
				})
	}

	render() {
		return (
				<div className={styles.users}>
					<h1>Users</h1>
					{
						this.props.users.map(u => <div className={styles.item} key={u.id}>
							<div className={styles.colLeft}>
								<div className={styles.img}>
									<img
											src={u.photos.small != null ? u.photos.small : userPhoto}
											alt={u.name}/>
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
		)
	}
}

export default Users