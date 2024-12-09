import { Header } from "@/components/dashboard/header"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { Statistics } from "@/components/dashboard/statistics"
import { CourseProgress } from "@/components/dashboard/course-progress"
import { ContinueWatching } from "@/components/dashboard/continue-watching"
import { LessonTable } from "@/components/dashboard/lesson-table"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white ">
        <SidebarNav />
      </aside>
      <div className="flex-1">
        <Header />
        <div className="flex gap-8 p-8">
          <div className="flex-1 space-y-8">
            <div className="relative h-[200px] rounded-lg bg-primary text-primary-foreground p-8">
              <div className="max-w-md space-y-4">
                <h1 className="text-3xl font-bold">Sharpen Your Skills with Professional Online Courses</h1>
                <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
                  Join Now
                </button>
              </div>
            </div>
            <CourseProgress />
            <ContinueWatching />
            <LessonTable />
          </div>
          <div className="w-80">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  )
}

