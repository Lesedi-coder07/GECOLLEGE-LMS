import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileMenu } from '@/components/mobile-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GE College - Online Learning Platform',
  description: 'Access high-quality courses and 1-on-1 tutoring with GE College',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <main className="min-h-screen">{children}</main>
       
      </body>
    </html>
  )
}

