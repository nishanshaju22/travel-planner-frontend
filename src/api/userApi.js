import api from './axios'

export const userApi = {
	showBucketList: async(userId) => {
		const response = await api.get(`/user/showBucketList/${userId}`)
		return response.data
	},

	addToBucketList: async(userId, place) => {
		const response = await api.post('/user/addBucketList', { userId, place })
		return response.data
	},

	deleteFromBucketList: async(userId, place) => {
		const response = await api.delete(`/user/${userId}/showBucketList/${place}`, { userId, place })
		return response.data
	},

	createUserPreference: async(preferences) => {
  		const response = await api.post('/user/preference', preferences)
  		return response.data
	},

	updateUserPreference: async(preferences) => {
  		const response = await api.put('/user/preference', preferences)
  		return response.data
	},

	getUserPreference: async() => {
  		const response = await api.get('/user/preference')
  		return response.data
	},
}
