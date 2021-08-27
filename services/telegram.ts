import axios from 'axios'

export interface telegramSendMessageProps {
  name: string
  phone: string
  idea?: string
}

const telegramServices = {
  sendMessage(message: telegramSendMessageProps) {
    axios.post('/api/telegram', message)
  },
}

export default telegramServices
