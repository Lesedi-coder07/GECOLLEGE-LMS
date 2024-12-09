import Link from "next/link"
import { LayoutDashboard, Inbox, BookOpen, CheckSquare, Users, Settings, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  return (
    <div className={cn("flex flex-col h-screen fixed  w-64", className)} {...props}>


      <div className="px-4 py-6 ">
        <Link href="/dashboard" className="flex flex-col items-center gap-2">

          <span className="font-semibold text-xl ">GE COLLEGE</span>
          <p className="text-black/70 text-sm">Technology Campus</p>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Overview
            </h4>
            <nav className="space-y-1">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 size-4" />
                  Dashboard
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard/inbox">
                  <Inbox className="mr-2 size-4" />
                  Inbox
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard/lessons">
                  <BookOpen className="mr-2 size-4" />
                  Lesson
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard/tasks">
                  <CheckSquare className="mr-2 size-4" />
                  Task
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard/groups">
                  <Users className="mr-2 size-4" />
                  Group
                </Link>
              </Button>
            </nav>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Friends
            </h4>
            <div className="space-y-2">
              {['Bagas Mahpie', 'Sir Dandy', 'Jhon Tosan'].map((friend) => (
                <div key={friend} className="flex items-center gap-2 px-2 py-1.5">
                  <div className="size-8 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium">{friend}</p>
                    <p className="text-xs text-muted-foreground">Friend</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="mt-auto px-4 py-4 ">
        <h4 className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Settings
        </h4>
        <nav className="space-y-1">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard/settings">
              <Settings className="mr-2 size-4" />
              Setting
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-500">
            <LogOut className="mr-2 size-4" />
            Logout
          </Button>
        </nav>
      </div>
    </div>
  )
}

