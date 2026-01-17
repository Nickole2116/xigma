import api from '../api'

/**
 * Get all users
 * @param {Object} params optional query parameters
 */
export const gets = (params) => {
  return api.get('/users', { params })
}
