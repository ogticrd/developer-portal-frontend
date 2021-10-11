import React from 'react'
import AccountSidebarMenu from './account-sidebar-menu'

export default function notifications() {
  return (
    <div className="bg-blue-primary-light flex">
      <AccountSidebarMenu />
      <div className="mx-auto px-6">
        <div className="card">Notifications</div>
      </div>
    </div>
  )
}
