import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreVertical } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "UI/UX Design",
    progress: "2/8 watched",
    icon: "✨",
    color: "bg-purple-100 text-purple-500",
  },
  {
    id: 2,
    title: "Branding",
    progress: "3/8 watched",
    icon: "🎨",
    color: "bg-pink-100 text-pink-500",
  },
  {
    id: 3,
    title: "Front End",
    progress: "6/12 watched",
    icon: "💻",
    color: "bg-blue-100 text-blue-500",
  },
]

export function CourseProgress() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card key={course.id} className="p-4">
          <div className="flex items-start justify-between">
            <div className={`size-10 rounded-lg ${course.color} flex items-center justify-center text-lg`}>
              {course.icon}
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="size-4" />
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.progress}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

