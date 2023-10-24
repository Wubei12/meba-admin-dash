import { Footer, Navbar, ThemeSwitch } from '@/components/common'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import CustomProvider from '@/redux/provider'
import { Setup } from '@/components/utils'
import { ThemeProvider } from './theme-provider'

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
      <body className={`${roboto.className} bg-white text-gray-700 dark:bg-[#191F45] dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <CustomProvider>
            <ThemeSwitch />
            <Setup />
            {children}
          </CustomProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
