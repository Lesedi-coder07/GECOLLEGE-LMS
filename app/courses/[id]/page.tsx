"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const courseData = {
  id: 1,
  title: "Introduction to Web Development",
  description: "Learn the basics of HTML, CSS, and JavaScript",
  videoUrl: "https://example.com/sample-video.mp4",
  videos: [
    { id: 1, title: "Introduction to HTML", duration: "10:30" },
    { id: 2, title: "CSS Basics", duration: "15:45" },
    { id: 3, title: "JavaScript Fundamentals", duration: "20:15" },
    { id: 4, title: "Building Your First Webpage", duration: "25:00" },
    { id: 5, title: "Responsive Design", duration: "18:30" },
  ]
}

export default function CourseDetailPage() {
  const { id } = useParams()
  const [progress, setProgress] = useState(0)
  const [notes, setNotes] = useState("")

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value))
  }

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
      <p className="text-gray-600 mb-8">{courseData.description}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <video
              src={courseData.videoUrl}
              controls
              className="w-full h-full object-cover rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Course Progress</h2>
            <Progress value={progress} className="w-full" />
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full mt-2"
            />
          </div>

          <div className="flex justify-between">
            <Button variant="outline">Previous Lesson</Button>
            <Button>Next Lesson</Button>
          </div>
        </div>

        <div>
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="videos">Video List</TabsTrigger>
              <TabsTrigger value="notes">Note</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <Card>
                <CardHeader>
                  <CardTitle>Course Videos</CardTitle>
                  <CardDescription>Browse and select videos from the course.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full pr-4">
                    {courseData.videos.map((video) => (
                      <div key={video.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <h3 className="font-medium">{video.title}</h3>
                          <p className="text-sm text-gray-500">{video.duration}</p>
                        </div>
                        <Button variant="ghost" size="sm">Play</Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle>Note Editor</CardTitle>
                  <CardDescription>Take notes as you watch the videos.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <CodeMirror

                    value={notes}
                    options={{
                      mode: 'javascript',
                      theme: 'material',
                      lineNumbers: true,
                      tabSize: 1,
                      
                    }}
                    onBeforeChange={(editor, data, value) => {
                      setNotes((prevNotes)=> (`${prevNotes} ${value}`))
          
                    }}
                    onChange={(editor, value) => {
                     
                    }}
                    className="min-h-[300px]"
                  /> */}
                  <Textarea></Textarea>
                  <Button className="mt-4">Save Notes</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

