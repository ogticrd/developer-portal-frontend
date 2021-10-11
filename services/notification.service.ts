import { Notification } from './../models/notification'
import { get } from './http/http.service'

export const getCurrentNotificatios = async (): Promise<Notification[]> => {
  const { data } = await get('user/notifications?size=1')
  return data.data
}

export const subscribeNotifications = async (): Promise<void> => {
  setInterval(async () => {
    const notifications = await getCurrentNotificatios()
    console.log(notifications)
  }, 10_000)
}
