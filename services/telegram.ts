import axios from 'axios'
import { TelegramSendMessageResponseInterface } from '../types/telegram'

export interface TelegramSendMessageProps {
  name: string
  phone: string
  idea?: string
}

const telegramServices = {
  async sendMessage(message: TelegramSendMessageProps) {
    const { data } = await axios.post<TelegramSendMessageResponseInterface>('/api/telegram', message)
    return data
  },
}

export default telegramServices
