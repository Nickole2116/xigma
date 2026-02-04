import api from '../api'

/**
 * Get all users
 * @param {Object} params optional query parameters
 */
export const login = (payload) => {
  return api.post('/admin/login_as_form', payload)
}
export const verifyToken = (payload) => {
  return api.post('/admin/verify_token', payload)
}
export const gets = (params) => {
  return api.get('/users', { params })
}

export const createOrder = (payload) => {
  return api.post('/admin/create_order', payload)
}
