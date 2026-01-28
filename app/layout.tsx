import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wanderplan - AI-Powered Collaborative Trip Planning',
  description: 'Plan your perfect trip with AI assistance. Collaborate with friends, discover destinations, and create unforgettable memories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
