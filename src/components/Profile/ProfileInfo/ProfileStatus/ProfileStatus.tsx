import React from 'react';
import styles from './ProfileStatus.module.css';


type ProfileStatusType = {
	status: string
}
type localStateType = {
	editMode: boolean
}

class ProfileStatus extends React.Component<ProfileStatusType> {
	state: localStateType = {
		editMode: false
	}

	activateEditMode = () => {
		// setState renders new virtual DOM
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		// setState renders new virtual DOM
		this.setState({
			editMode: false
		})
	}

	changeStatusValue = () => {

	}

	render() {
		return (
				<div className={styles.wrap}>
					{!this.state.editMode
							? <p
									className={styles.text}
									onDoubleClick={this.activateEditMode}>
								{this.props.status}</p>
							: <input
									className={styles.input}
									onBlur={this.deactivateEditMode}
									value={this.props.status}
									autoFocus={true}/>}
				</div>
		)
	}
}

export default ProfileStatus