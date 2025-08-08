"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

export default function StatCard({
  title = "Total Inventory",
  value = "5",
  icon,
 
}: {
  title?: string
  value?: string | number
  icon?: ReactNode
  iconBgStyles?: string
}) {
  return (
    <Card className="shadow-sm max-w-[262px]">
      <CardContent className="px-5">
      <div className="flex gap-4 justify-between">
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="">{icon}</div>
        
        </div>
        
        <div className="text-6xl font-semibold mt-1">{value}</div>
      </CardContent>
    </Card>
  )
}
