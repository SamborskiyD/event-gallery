import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Event Gallery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center my-20 px-10 md:px-16 lg:px-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
