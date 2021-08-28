export interface TelegramSendMessageResponseInterface {
  ok: boolean
  result: {
    message_id: number
    from: TelegramUserInterface
    chat: TelegramChatInterface
    date: Date
    text: string
  }
}

export interface TelegramUserInterface {
  id: number
  is_bot: boolean
  first_name: string
  username: string
}

export interface TelegramChatInterface {
  id: number
  title: string
  type: 'private' | 'group' | 'supergroup' | 'channel'
  all_members_are_administrators: boolean
}

export interface ApiTelegramResponse {
  ok: boolean
}
