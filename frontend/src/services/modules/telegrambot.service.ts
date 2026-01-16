import api from '../api'

/**
 * Send message via Telegram Bot
 * @param {string|number} chat_id
 * @param {string} text
 */
export const sendTelegramMessage = (chat_id, text) => {
  return api.post('/telegram/bot/send', {
    chat_id,
    text,
  })
}

/**
 * Get Telegram Bot updates
 */
export const getTelegramUpdates = () => {
  return api.get('/telegram/bot/updates')
}

/**
 * Get Telegram Bot info (getMe)
 */
export const getTelegramMe = () => {
  return api.get('/telegram/bot/getMe')
}
