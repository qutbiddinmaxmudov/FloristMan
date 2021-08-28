import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { TelegramSendMessageProps } from '../../services/telegram'
import { TelegramSendMessageResponseInterface } from '../../types/telegram'

interface SendMessageInterface {
  ok: boolean
}

const telegramAPI = async (req: NextApiRequest, res: NextApiResponse<SendMessageInterface>) => {
  if (req.method === 'POST') {
    const body: TelegramSendMessageProps = req.body
    const message = `
<b>Предложение с сайта!</b>
<b>Имя</b>: ${body.name}
<b>Телефон</b>: <a href="tel:${body.phone}"><u>${body.phone}</u></a>
<b>Идея</b>: ${body.idea}`

    const { data } = await axios.post<TelegramSendMessageResponseInterface>(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_GROUP_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }
    )
    if (data.ok) {
      res.status(200).json({ ok: data.ok })
    } else {
      res.status(503).json({ ok: data.ok })
    }
  }
}

export default telegramAPI
