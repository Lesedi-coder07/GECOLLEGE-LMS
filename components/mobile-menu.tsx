"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet  open={open} onOpenChange={setOpen}>
      <SheetTrigger className='bg-white' asChild>
        <Button variant="outline" size="icon" className="md:hidden mr-12 bg-white z-50">
          <Menu className="h-6 w-6" />
          <span className="sr-only mr-20">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
          <Link href="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/tutoring" onClick={() => setOpen(false)}>
            Tutoring
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/account" onClick={() => setOpen(false)}>
            Account
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

