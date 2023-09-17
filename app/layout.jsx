import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/reset.css'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Havvanur DOGDU'
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className= {inter.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
