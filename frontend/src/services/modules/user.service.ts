import api from '../api'

/**
 * Get all users
 * @param {Object} params optional query parameters
 */
export const getUsers = (params) => {
  return api.get('/users', { params })
}

/**
 * Get a single user by ID
 * @param {number|string} id
 */
export const getUser = (id) => {
  return api.get(`/users/${id}`)
}

/**
 * Create a new user
 * @param {Object} payload user data
 */
export const createUser = (payload) => {
  return api.post('/users', payload)
}

/**
 * Update a user by ID
 * @param {number|string} id
 * @param {Object} payload user data
 */
export const updateUser = (id, payload) => {
  return api.put(`/users/${id}`, payload)
}

/**
 * Delete a user by ID
 * @param {number|string} id
 */
export const deleteUser = (id) => {
  return api.delete(`/users/${id}`)
}
