"use client"

import Image from "next/image"
import { MapPin } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function PropertyHeader() {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <div className="w-full h-56 sm:h-72 relative">
        <Image
          src="/banner.png"
          alt="Property banner"
          fill
          sizes="100vw"
          className="object-fill"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-xl">▴</span>
          <span className="font-semibold text-2xl text-foreground">Azure Palms Residences</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Palm Oasis District.</span>
        </div>
        <div className="mt-3 text-3xl font-semibold">AED 348,295</div>
        <div className="mt-1 text-muted-foreground">Rent</div>

        <div className="mt-6">
          <Tabs defaultValue="prospect" className="w-full">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger
                value="verification"
                className="rounded-md border bg-white data-[state=active]:bg-gray-100 data-[state=active]:text-foreground px-4 py-2 mr-2"
              >
                Verification
              </TabsTrigger>
              <TabsTrigger
                value="prospect"
                className="rounded-md border bg-green-50 text-foreground data-[state=inactive]:bg-white px-4 py-2 mr-2"
              >
                Prospect
              </TabsTrigger>
              <TabsTrigger
                value="offer"
                className="rounded-md border bg-white data-[state=active]:bg-gray-100 data-[state=active]:text-foreground px-4 py-2"
              >
                Offer
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-6">
          <Progress value={51} className="h-1.5" />
          <div className="text-right text-sm text-muted-foreground mt-1">51% completed</div>
        </div>
      </div>
    </div>
  )
}
