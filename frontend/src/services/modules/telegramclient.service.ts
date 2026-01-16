import api from '../api'

/**
 * Send message via Telegram
 * @param {string|number} chat_id
 * @param {string} text
 */
export const sendTelegramMessage = (chat_id, text) => {
  return api.post('/telegram/client/send', {
    chat_id,
    text,
  })
}

/**
 * Get Telegram Client updates
 */
export const getTelegramUpdates = () => {
  return api.get('/telegram/client/history')
}

/**
 * Get Telegram Client updates
 */
export const getTelegramProfile = () => {
  return api.get('/telegram/client/me')
}