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
        <main className="min-h-screen my-20 px-5 sm:px-10 md:px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
