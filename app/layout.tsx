import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Legacy Update - Get Windows Update Working on Legacy Windows",
  description: "Get back online, activate, and install updates on your legacy Windows PC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-[#ECF3FE]">
          {children}
        </div>
      </body>
    </html>
  )
}

