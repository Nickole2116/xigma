import api from '../api'

/**
 * Send message via Telegram
 */
export const loginTelegramClient = () => {
  return api.get('/telegram/client/login')
}

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
export const getTelegramUpdates = (peer) => {
  return api.get('/telegram/client/history?peer='+peer)
}

/**
 * Get Telegram Client updates
 */
export const getTelegramProfile = () => {
  return api.get('/telegram/client/me')
}