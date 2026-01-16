export const handleError = (error) => {
    if (error.response) {
      const { status, data } = error.response
  
      if (status === 401) {
        localStorage.removeItem('access_token')
        window.location.href = '/login'
      }
  
      return Promise.reject(data?.message || 'Request failed')
    }
  
    return Promise.reject('Network error')
}
  