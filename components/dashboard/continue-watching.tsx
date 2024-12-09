import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "Building Modern Web Apps with React and Next.js",
    category: "WEB DEVELOPMENT",
    image: "/THUMBNAILS/web-pic.jpg",
    mentor: {
      name: "David Rammutla",
      avatar: "/avatars/1.png",
    },
  },
  {
    id: 2,
    title: "AI Development with Python and LangChain",
    category: "ARTIFICIAL INTELLIGENCE", 
    image: "/THUMBNAILS/ai-pic.jpg",
    mentor: {
      name: "Michael Park",
      avatar: "/avatars/1.png",
    },
  },
  {
    id: 3,
    title: "Building AI-Powered Chatbots with LangChain",
    category: "ARTIFICIAL INTELLIGENCE",
    image: "/THUMBNAILS/ai-pic.jpg",
    mentor: {
      name: "David Wilson",
      avatar: "/avatars/1.png",
    },
  },
]

export function ContinueWatching() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <div className="relative aspect-video">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:text-white"
              >
                <Heart className="size-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <span className="text-xs font-medium text-primary">{course.category}</span>
                <h3 className="font-medium line-clamp-2">{course.title}</h3>
                <div className="flex items-center gap-2">
      
                  <Image src={course.mentor.avatar} width={30} height={30} alt={course.mentor.name} />
                  <span className="text-sm text-muted-foreground">{course.mentor.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

