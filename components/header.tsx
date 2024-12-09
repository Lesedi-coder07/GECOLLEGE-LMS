import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
             <img src="/ge-logo.png" alt="logo" className="w-[100px]" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/tutoring" className="text-gray-600 hover:text-gray-900">
              Tutoring
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

