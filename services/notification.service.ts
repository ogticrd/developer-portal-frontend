import axios from 'axios'
import { Notification } from './../models/notification'
import { get } from './http/http.service'

export const getCurrentNotificatios = async (): Promise<Notification[]> => {
  const { data } = await get('user/notifications?size=1')
  return data.data
}

export const getNotificatiosHistory = async (
  limit: number = 10,
  page: number = 1,
): Promise<Notification[]> => {
  //   const { data } = await get('user/notifications')
  const { data } = await axios.get(
    `https://61642d60b55edc00175c1deb.mockapi.io/api/notifications?limit=${limit}&page=${page}`,
  )
  //   return data.data
  return data
}

export const subscribeNotifications = async (): Promise<void> => {
  setInterval(async () => {
    const notifications = await getCurrentNotificatios()
    console.log(notifications)
  }, 10_000)
}
