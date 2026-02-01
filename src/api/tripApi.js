import api from './axios'

export const tripsApi = {
  getAllTrips: async(userId) => {
    const response = await api.get(`trip/user/${userId}/trips`)
    return response.data
  },

  getTrip: async(userId, tripId) => {
    const response = await api.get(`trip/user/${userId}/trips/${tripId}`)
    return response.data
  },

  createTrip: async(userId, tripData) => {
    const response = await api.post(`trip/user/${userId}/trips`, tripData)
    return response.data
  },

  updateTrip: async(userId, tripId, tripData) => {
    const response = await api.patch(`trip/user/${userId}/trips/${tripId}`, tripData)
    return response.data
  },

  deleteTrip: async(userId, tripId) => {
    const response = await api.delete(`trip/user/${userId}/trips/${tripId}`)
    return response.data
  },
}
