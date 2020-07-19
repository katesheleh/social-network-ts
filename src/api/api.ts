import axios from 'axios';


// axios general settings, axios params -> baseUrl and config
// instance makes auto concat for baseUrl and anothers axios config
const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: {
		'API-KEY': '37106453-1aca-4e6f-89bb-a08749b89b18'
	}
})

export const authAPI = {

	me() {
		return instance.get(`/auth/me`)
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
	}

}


export const followAPI = {

	unfollowUser(userId: string) {
		return instance.delete(`/follow/${userId}`)
	},

	followUser(userId: string) {
		return instance.post(`/follow/${userId}`, {})
	}

}





