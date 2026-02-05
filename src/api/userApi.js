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
}
