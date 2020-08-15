import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileStatus.module.css';


type ProfileStatusType = {
	status: string
	updateStatus: (status: string) => void
}
type localStateType = {
	editMode: boolean
	status: string
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [status, setStatus] = useState<string>(props.status)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value)
	}

	return (
			<div className={styles.wrap}>
				{!editMode
						? <p className={styles.text} onDoubleClick={activateEditMode}>{props.status}</p>
						: <input
								onChange={onStatusChange}
								className={styles.input}
								onBlur={deActivateEditMode}
								value={status}
								autoFocus={true}/>}
			</div>
	)

}

export default ProfileStatusWithHooks