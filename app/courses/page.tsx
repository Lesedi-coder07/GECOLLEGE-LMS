import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navigation from "@/components/navigation"

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    category: "Web Development",
    level: "Beginner",
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "Advanced React Techniques",
    description: "Master advanced concepts in React development",
    category: "Web Development",
    level: "Advanced",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "Get started with data analysis and machine learning",
    category: "Data Science",
    level: "Intermediate",
    duration: "8 weeks",
  },
]

export default function CoursesPage() {
  return (<>
    <Navigation />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <p className="text-sm text-gray-500">Duration: {course.duration}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/courses/${course.id}`}>
                <Button>Start Learning</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}

