import React from 'react'
import ProtectedRouteProvider from '../../context/protected-route.context'
import AccountSidebarMenu from './account-sidebar-menu'

export default function AccountPassword() {
  return (
    <ProtectedRouteProvider>
      <div className="bg-blue-primary-light flex">
        <AccountSidebarMenu />
        Password
      </div>
    </ProtectedRouteProvider>
  )
}
