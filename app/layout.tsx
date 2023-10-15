import { Footer, Navbar } from '@/components/common'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import CustomProvider from '@/redux/provider'
import { Setup } from '@/components/utils'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: 'Meba | Empower Your Faith, Support Your Community',
  description: "Support our church's mission with our fundraising app. Make a difference today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} h-screen`}>
        <CustomProvider>
          <Setup />
          {children}
        </CustomProvider>
      </body>
    </html>
  )
}
