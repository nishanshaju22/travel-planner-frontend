'use client'

import Sidebar from '@/src/components/Sidebar'
import UserMenu from '@/src/components/UserMenu'
import NotificationButton from '@/src/components/NotificationButton'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}) {
  const [notifications] = useState(3)

  return (
    <div className="flex min-h-screen bg-sand-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-sand-200 px-6 py-3 flex justify-end items-center gap-4">
          <NotificationButton count={notifications} />
          <UserMenu />
        </header>

        {children}
      </div>
    </div>
  )
}
