import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/AuthContext'

export const metadata: Metadata = {
  title: 'Travel Buddy - AI-Powered Collaborative Trip Planning',
  description: 'Plan your perfect trip with AI assistance. Collaborate with friends, discover destinations, and create unforgettable memories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
