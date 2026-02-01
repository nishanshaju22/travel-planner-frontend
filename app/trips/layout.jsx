'use client'

import Sidebar from '@/src/components/Sidebar'

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen bg-sand-50">
      <Sidebar />

      {/* Content column */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  )
}
