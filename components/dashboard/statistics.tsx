"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  {
    name: "1-10 Aug",
    total: 20,
  },
  {
    name: "11-20 Aug",
    total: 45,
  },
  {
    name: "21-30 Aug",
    total: 25,
  },
]

export function Statistics() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Completion</CardTitle>
          <Button variant="ghost" size="icon">
            <Plus className="size-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-2">
            <div className="relative size-32">
              <svg className="size-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted-foreground/20"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 60}
                  strokeDashoffset={2 * Math.PI * 60 * (1 - 0.32)}
                  className="text-primary"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-24 rounded-full bg-muted flex items-center justify-center">
                  32%
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Good Morning Jason 🔥</h3>
              <p className="text-sm text-muted-foreground">
                Continue your learning to achieve your target!
              </p>
            </div>
          </div>
          <div className="mt-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-normal">Your mentor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {['Padhang Satrio', 'Zakir Horizontal', 'Leonardo Samsul'].map((mentor) => (
            <div key={mentor} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-full bg-muted" />
                <div>
                  <p className="font-medium">{mentor}</p>
                  <p className="text-sm text-muted-foreground">Mentor</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Follow
              </Button>
            </div>
          ))}
          <Button variant="link" className="w-full">See All</Button>
        </CardContent>
      </Card>
    </div>
  )
}

