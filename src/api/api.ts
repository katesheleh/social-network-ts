import axios from 'axios';


// axios general settings, axios params -> baseUrl and config
// instance makes auto concat for baseUrl and anothers axios config
const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: {
		'API-KEY': 'a996de67-bf16-42aa-ac25-992dabb5f211'
	}
})

export const authAPI = {

	me() {
		return instance.get(`/auth/me`)
				.then(response => response.data)
	},
	login(email: string, password: string, rememberMe: boolean = false) {
		return instance.post(`/auth/login`, {email, password, rememberMe})
				.then(response => response.data)
	},
	logout() {
		return instance.delete(`/auth/login`)
				.then(response => response.data)
	}
}


export const usersAPI = {

	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance.get(`/users?page=${currentPage}&count=${pageSize}&sortOrder=asc`)
				.then(response => response.data)
	}

}


export const profileAPI = {

	getUser(userId: string) {
		return instance.get(`/profile/${userId}`)
	},

	getStatus(userId: string) {
		return instance.get(`/profile/status/${userId}`)
	},

	updateStatus(status: string) {
		return instance.put(`/profile/status`, {status})
	},

	savePhoto(file: string) {
		let formData = new FormData()
		formData.append('image', file)
		return instance.put(`/profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
				.then(response => response.data)
	}

}


export const followAPI = {

	unfollowUser(userId: string) {
		return instance.delete(`/follow/${userId}`)
	},

	followUser(userId: string) {
		return instance.post(`/follow/${userId}`)
	}

}





