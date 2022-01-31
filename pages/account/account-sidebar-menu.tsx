// validar inclusion de planes
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'

export default function AccountSidebarMenu() {
  const options = [
    {
      title: 'General',
      path: '',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    // {
    //   title: 'Password',
    //   path: 'password',
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    //       />
    //     </svg>
    //   ),
    // },
    {
      title: 'APIs Subscriptions',
      path: 'apis',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: 'Notifications',
      path: 'notifications',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
  ]

  const router = useRouter()

  return (
    <div className="bg-white shadow-sm account-sidebar">
      <ul className="p-4">
        {options.map((option) => (
          <li key={option.title} className="mb-1 w-64">
            <Link href={'/account/' + option.path}>
              <a
                className={`flex gap-4 p-2 font-medium rounded-lg ${router.pathname ==
                  '/account' + (option.path ? '/' + option.path : '')
                  ? 'bg-blue-primary text-white'
                  : 'text-gray-800'
                  }`}
              >
                {option.icon} {option.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
