import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { telegramSendMessageProps } from '../../services/telegram'

interface SendMessageInterface {
  ok: boolean
}

interface resMessage {
  text: string
}

const telegramAPI = async (req: NextApiRequest, res: NextApiResponse<SendMessageInterface>) => {
  if (req.method === 'POST') {
    const body: telegramSendMessageProps = req.body
    const message = `
<b>Предложение с сайта!</b>
<b>Имя</b>: ${body.name}
<b>Телефон</b>: <a href="tel:${body.phone}"><u>${body.phone}</u></a>
<b>Идея</b>: ${body.idea}`

    const { data } = await axios.post<resMessage>(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_GROUP_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }
    )

    console.log(data.text)
  }
}

export default telegramAPI
