import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Project Outlive Yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='scrollbar-none bg-cream'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
