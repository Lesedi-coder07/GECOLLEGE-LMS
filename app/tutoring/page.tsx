"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tutors = [
  { id: 1, name: "Alice Johnson", expertise: "Web Development" },
  { id: 2, name: "Bob Smith", expertise: "Data Science" },
  { id: 3, name: "Carol Williams", expertise: "Mobile App Development" },
]

export default function TutoringPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTutor, setSelectedTutor] = useState("")

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Schedule a 1-on-1 Tutoring Session</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
            <CardDescription>Choose a date for your tutoring session</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select a Tutor</CardTitle>
            <CardDescription>Choose a tutor for your session</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedTutor}>
              <SelectTrigger>
                <SelectValue placeholder="Select a tutor" />
              </SelectTrigger>
              <SelectContent>
                {tutors.map((tutor) => (
                  <SelectItem key={tutor.id} value={tutor.id.toString()}>
                    {tutor.name} - {tutor.expertise}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={!selectedDate || !selectedTutor}>
              Book Session
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

