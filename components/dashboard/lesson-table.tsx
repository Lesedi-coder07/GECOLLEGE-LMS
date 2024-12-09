import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const lessons = [
  {
    id: 1,
    mentor: {
      name: "Padhang Satrio",
      avatar: "/placeholder.svg",
    },
    date: "2/16/2024",
    type: "UI/UX DESIGN",
    description: "Understand Of UI/UX Design",
  },
]

export function LessonTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xl font-semibold">Your Lesson</CardTitle>
        <Button variant="link">See all</Button>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b">
                <th className="h-12 px-4 text-left align-middle font-medium">MENTOR</th>
                <th className="h-12 px-4 text-left align-middle font-medium">TYPE</th>
                <th className="h-12 px-4 text-left align-middle font-medium">DESC</th>
                <th className="h-12 px-4 text-left align-middle font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-muted" />
                      <div>
                        <p className="font-medium">{lesson.mentor.name}</p>
                        <p className="text-xs text-muted-foreground">{lesson.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {lesson.type}
                    </span>
                  </td>
                  <td className="p-4">{lesson.description}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="size-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

