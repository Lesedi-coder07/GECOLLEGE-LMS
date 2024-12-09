import { Bell } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export function Header() {
  return (
    <header className="flex items-center gap-4 p-4 border-b">
      <div className="flex-1">
        <Input 
          type="search" 
          placeholder="Search your course..." 
          className="max-w-xl"
        />
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="size-5" />
      </Button>
      <div className="flex items-center gap-2">
        <Image src="/avatars/47.png" width={30} height={30} alt="avatar" className="rounded-full" />
        <span className="font-medium">Jason Ranti</span>
      </div>
    </header>
  )
}

