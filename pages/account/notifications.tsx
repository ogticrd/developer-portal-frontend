import React, { useEffect, useState } from 'react'
import Pagination from '../../components/pagination'
import ProtectedRouteProvider from '../../context/protected-route.context'
import { Notification } from '../../models/notification'
import { getNotificatiosHistory } from '../../services/notification.service'
import AccountSidebarMenu from './account-sidebar-menu'

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const getData = async () => {
      const data = await getNotificatiosHistory(page)
      setNotifications(data)
    }

    getData()
  }, [page])

  const onPageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <ProtectedRouteProvider>
      <div className="bg-blue-primary-light flex">
        <AccountSidebarMenu />
        <div className="container mx-auto px-6">
          <div className="card">
            <h1 className="text-lg font-semibold text-gray-700">
              Notifications
            </h1>

            <table className="w-full border-2 border-gray-300 mt-8">
              <thead>
                <tr className="bg-gray-200">
                  <th className="font-normal text-left p-2">Tilte</th>
                  <th className="font-normal text-left p-2">Message</th>
                  <th className="font-normal text-left p-2">Created at</th>
                </tr>
              </thead>
              <tbody>
                {notifications?.map((notification) => (
                  <tr
                    key={notification.id}
                    className="border-b border-gray-300"
                  >
                    <td className="p-2">{notification.title}</td>
                    <td className="p-2">{notification.message}</td>
                    <td className="p-2 text-sm">
                      {new Date(notification.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={page}
              limit={10}
              totalResults={35}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </ProtectedRouteProvider>
  )
}
